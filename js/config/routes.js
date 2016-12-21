(function() {
  'use strict';

  angular.module('portfolio')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/portfolio');

    $stateProvider
      .state('home', {
        url: '/portfolio',
        templateUrl: 'js/templates/portfolio.html'
      })
      .state('bio', {
        url: '/bio',
        templateUrl: 'js/templates/bio.html'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'js/templates/resume.html'
      })
  }
}());
