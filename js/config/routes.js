(function() {
  'use strict';

  angular.module('portfolio')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/templates/home.html'
      })
      .state('bio', {
        url: '/bio',
        templateUrl: 'js/templates/bio.html'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'js/templates/resume.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'js/templates/portfolio.html'
      })
  }
}());
