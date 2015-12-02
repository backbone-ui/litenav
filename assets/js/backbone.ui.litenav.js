/*
 * Backbone UI: Litenav
 * Source: https://github.com/backbone-ui/litenav
 * Copyright © Makesites.org
 *
 * Initiated by Lyndel Thomas (@ryndel)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function (lib) {

	//"use strict";

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		var deps = ['jquery', 'underscore', 'backbone']; // condition when backbone.app is part of the array?
		define('backbone.ui.litenav', deps, lib);
	} else if ( typeof module === "object" && module && typeof module.exports === "object" ){
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = lib;
	} else {
		// Browser globals
		var Query = window.jQuery || window.Zepto || window.vQuery;
		lib(Query, window._, window.Backbone, window.APP);
	}
}(function ($, _, Backbone, APP) {

	// support for Backbone APP() view if available...
	var isAPP = ( typeof APP !== "undefined" );
	var View = ( isAPP && typeof APP.View !== "undefined" ) ? APP.View : Backbone.View;


	var Litenav = View.extend({

		el : '.ui-litenav',

		options : {
			navEl : ".nav",
			maskEl : ".ui-litenav-mask",
			preventDefault: false
		},

		initialize: function( options ){
			var self = this;
			window.addEventListener('resize', function(){ self.resize() }, false);

			return View.prototype.initialize.call(this, options);
		},

		events: {
			"click .ui-litenav-control": "toggle",
			"click .ui-litenav-mask": "toggle",
			"click .ui-litenav-target a": "clickNav"
		},

		toggle: function(e) {
			e.preventDefault();
			$( this.options.navEl ).toggleClass('ui-litenav-active');
			$( this.options.maskEl ).toggleClass('ui-litenav-active');
		},

		clickNav: function(e) {
			if( this.options.preventDefault ){
				e.preventDefault();
				var url = $(e.target).closest("a").attr("href");
				// better way to define if this is an ajax URL...
				var isHash = (url.substr(0,1) == "#");
				if( url ){
					if( isHash ){ app.navigate( url, true ) } else { window.location = url; }
				}
			}
			$( ".ui-litenav-target" ).removeClass('ui-litenav-active');

		},

		resize: function() {
			$( this.options.navEl ).removeClass('ui-litenav-active');
			$( this.options.maskEl ).removeClass('ui-litenav-active');
		},

		postRender: function() {
			// check if we have the sidenav control
			var control = $(this.el).find(".ui-litenav-control");
			if( !control.length ) {
				// add it to the el
				var $el = $('<a href="" class="ui-litenav-control"></a>');
				$(this.el).find("header").prepend($el);
				$(this.el).prepend($el);

				$( this.options.navEl ).addClass("ui-litenav-target");

			}
		}
	});


	// update Backbone namespace regardless
	Backbone.UI = Backbone.UI ||{};
	Backbone.UI.Litenav = Litenav;
	if( isAPP ){
		APP.UI = APP.UI || {};
		APP.UI.Litenav = Backbone.UI.Litenav;
	}

	// If there is a window object, that at least has a document property
	if ( typeof window === "object" && typeof window.document === "object" ) {
		// update APP namespace
		if( isAPP ){
			window.APP = APP;
		}
		window.Backbone = Backbone;
	}

	// for module loaders:
	return Litenav;

}));