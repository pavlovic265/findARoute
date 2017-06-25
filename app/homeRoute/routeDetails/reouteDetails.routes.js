routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('details', {
            url: '/details/:start/:end',
            template: require('./routeDetails.html'),
            controller: 'RouteDetailsController',
            controllerAs: 'routeDetails'
        });
}