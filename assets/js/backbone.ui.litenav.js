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
		
		events: {
			"click .ui-litenav-control": "toggle",
		},
		
		toggle: function(e) {
			e.preventDefault();
			$( this.options.navEl ).toggleClass('visible');
		}, 
		
		
		
		
		
	});
	
})(this._, this.Backbone);