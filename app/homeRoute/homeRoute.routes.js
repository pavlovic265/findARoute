routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./homeRoute.html'),
      controller: 'HomeRouteController',
      controllerAs: 'homeRoute'
    });
}