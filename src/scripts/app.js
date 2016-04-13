angular
  .module('ChatApp', [
    'ngRoute',
    'MessagesController',
    'firebase',
  ])
  .config([
    '$routeProvider',
    '$locationProvider',
    function ($routeProvider, $locationProvider) {
      'use strict';
      $routeProvider
        .when('/chat', {
          templateUrl: '/partials/messages-controller.html',
          controller: 'MessagesController',
          controllerAs: 'msgsCtrl'
        })
        .otherwise('/chat');
    },
  ]);
