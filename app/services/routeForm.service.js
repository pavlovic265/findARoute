import angular from 'angular';

import ErrorsSrvice from './error.services';
import RoutesList from './routesList.services';

RouteForm.$inject = ['RoutesList', 'ErrorService', '$http', '$state'];

function RouteForm(RoutesList, ErrorService, $http, $state){

    let service = { searchRoute };

        return service;

    function extract(response) {
        return response.data;
    }

    function searchRoute(route) {
        route.searching = true;
        if((route.start === '' && !route.myLocation ) || route.end === '') {
            ErrorService.addError('Filds can not be empty!');
            resetRouteValue(route);
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {

                        if(route.start === '') {
                            route.start = `${position.coords.latitude}, ${position.coords.longitude}`;
                        }

                        $state.go('details', { 'start': route.start, 'end': route.end });

                    }, function() {
                        ErrorService.addError('Filds can not be empty!');
                    });
                } else {
                    ErrorService.addError('Browser dose not support geolocation!');
                }
            }
        }

    function resetRouteValue(route) {
        route.start = '';
        route.end = '';
        route.distance = '';
        route.duration = '';
        route.searching = false;
        route.myLocation = false;
    }
}

export default angular.module('services.routes-form', [ErrorsSrvice, RoutesList])
    .service('RouteForm', RouteForm)
    .name;
