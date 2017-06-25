import angular from 'angular';

import ErrorsSrvice from './error.services';
import RoutesList from './routesList.services';

RouteForm.$inject = ['RoutesList', 'ErrorService', '$http'];

function RouteForm(RoutesList, ErrorService, $http){

    let service = { searchRoute };

        return service;

    function extract(response) {
        return response.data;
    }

    function searchRoute(route) {
        route.searching = true;
        if(route.start === '' || route.end === '') {
            ErrorService.addError('Filds can not be empty!');
            resetRouteValue(route);
            return;
        }

        $http.get(`/googleAp1i/${route.start}/${route.end}`)
        .then(function(response){
            response = extract(response);
            route.distance = response.routes[0].legs[0].distance.text;
            route.duration = response.routes[0].legs[0].duration.text;
            RoutesList.addRoute(route);
            resetRouteValue(route);
        })
        .catch(function(e){
            ErrorService.addError('There was an error!')
            resetRouteValue(route);
        });
    }

    function resetRouteValue(route) {
        route.start = '';
        route.end = '';
        route.distance = '';
        route.duration = '';
        route.searching = false;
        
    }
}

export default angular.module('services.routes-form', [ErrorsSrvice, RoutesList])
    .service('RouteForm', RouteForm)
    .name;
