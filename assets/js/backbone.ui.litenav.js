// Backbone.js Litenav extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/litenav
//
// Licensed under the MIT license: 
// http://makesites.org/licenses/MIT

(function(_, Backbone) {
	
	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;
	
	Backbone.UI.Litenav = View.extend({
		
		el : '.ui-litenav',
		
		options : {
			navEl : ".nav", 
		},
		
		initialize: function(){
			var self = this;
			window.addEventListener('resize', function(){ self.resize() }, false);
		},
		
		events: {
			"click .ui-litenav-control": "toggle",
		},
		
		toggle: function(e) {
			e.preventDefault();
			$( this.options.navEl ).toggleClass('ui-litenav-active');
		},
		
		resize: function() {
			$( this.options.navEl ).removeClass('ui-litenav-active');
		},
		
		postRender: function() {
			// check if we have the sidenav control
			var control = $(this.el).find(".ui-litenav-control");
			if( !control.length ) { 
				// add it to the el
				var $el = $('<a href="" class="ui-litenav-control"><img src="../assets/img/menu-dark.svg"></a>');
				$(this.el).find("header").prepend($el);
				$(this.el).prepend($el);
			}
		} 
		
		
		
		
		
	});
	
})(this._, this.Backbone);