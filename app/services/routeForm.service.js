import angular from 'angular';

import RoutesList from './routesList.services';

RouteForm.$inject = ['$http', 'RoutesList', 'API'];

function RouteForm($http, $sce, $sceDelegate, RoutesList, API){


    let directionsService = new google.maps.DirectionsService,
        tempRoute;



    function extract(response) {
        return response.data || response;
    }


    function searchRouteRespnse(response, status) {
        if(status !== google.maps.DirectionsStatus.OK) {
            tempRoute.start = '';
            tempRoute.end = '';
            return;
        }
        response = extract(response);
        tempRoute.distance = response.routes[0].legs[0].distance.text;
        tempRoute.duration = response.routes[0].legs[0].duration.text;
        RoutesList.addRoute(angular.extend({}, tempRoute));
        tempRoute.start = '';
        tempRoute.end = '';
    }

    function searchRoute(route) {

        if(route.start === '' || route.end === '') {
            return;
        }

        directionsService.route({
            origin: route.start,
            destination: route.end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING},
            searchRouteRespnse)

    }

    return { searchRoute };
}

export default angular.module('services.route-form', [])
    .service('RouteForm', RouteForm)
    .name;