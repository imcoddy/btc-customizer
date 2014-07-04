'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ngAnimate',
  'ngRoute',

  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',

  // 3rd party dependencies
  'btford.socket-io',
  'ui.bootstrap'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/design', {
      templateUrl: 'partials/design',
      controller: 'DesignCtrl'
    }).
    when('/gallery', {
      templateUrl: 'partials/gallery',
      controller: 'GalleryCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'AboutCtrl'
    }).
    otherwise({
      redirectTo: '/design'
    });

  $locationProvider.html5Mode(true);
});
