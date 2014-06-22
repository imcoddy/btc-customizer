'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
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
      controller: 'MyCtrl1'
    }).
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/design'
    });

  $locationProvider.html5Mode(true);
});
