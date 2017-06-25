routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('routes', {
            url: '/',
            template: require('./homeRoute.html'),
            controller: 'HomeRouteController',
            controllerAs: 'homeRoute'
        });
}