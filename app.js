'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.view6',
  'myApp.view7',
  'myApp.view8',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  // If time is after 9PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (n > 16 && n < 20)
	  // If time is between 5PM – 9PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});

cheet('g o l d', function () {
  document.body.className = "gold";
  console.log("Stay Golden!")
});

;(function ($) {
    $('#main').smoothState();
})(jQuery);