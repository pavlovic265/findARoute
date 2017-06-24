import angular from 'angular';

RouteForm.$inject = [];

function RouteForm(){
    let errors = [];

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

    function getErrors() {
        return errors;
    }

    function removeError(error) {
        let index = errors.indexOf(error);
        errors.splice(index, 1);
    }

    function addError(error) {
        errors.push(error)
    }

    return { getErrors, removeError, addError };
}

export default angular.module('services.route-form', [])
    .service('RouteForm', RouteForm)
    .name;