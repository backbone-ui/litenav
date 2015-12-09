# Backbone UI: Litenav

A lightweight popup nav (for mobile)


## Dependencies

* [Backbone](http://backbonejs.org/)
* [Underscore](http://underscorejs.org/)
* [jQuery](http://jquery.com/) (or alternative event handler)

Note that the plugin uses APP.View from [Backbone APP](http://github.com/makesites/backbone-app) if available, but falls back gracefully if you prefer using custom render logic.


## Examples

* [Static](http://rawgit.com/backbone-ui/litenav/master/examples/static.html)
* [Post Render](http://rawgit.com/backbone-ui/litenav/master/examples/post-render.html)


## Install

Using bower:
```
bower install backbone.ui.litenav
```


## Usage

Load the css and js in your app. Then load the view on the appropriate container:
```
var view = new Backbone.UI.Litenav({
});
```


## Options

...


## Credits

Initiated by Lyndel Thomas ( [@ryndel](http://github.com/ryndel) )

Distributed through [Makesites.org](http://makesites.org/)

Released under the [MIT license](http://makesites.org/licenses/MIT)
