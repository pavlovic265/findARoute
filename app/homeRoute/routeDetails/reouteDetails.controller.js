
RouteDetailsController.$inject = ['$scope', 'RoutesList', 'ErrorService', '$state', '$stateParams'];

export default function RouteDetailsController($scope, RoutesList, ErrorService, $state, $stateParams) {
    let routeDetails = this,
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer,
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: new google.maps.LatLng(-37.812150, 144.971008),
        });

    routeDetails.route = {
        start: $stateParams.start,
        end: $stateParams.end
    }

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directionsPanelBody'));

    directionsService.route({
            origin: $stateParams.start,
            destination: $stateParams.end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            let legs = response.routes[0].legs[0];
            routeDetails.route.distance = legs.distance.text;
            routeDetails.route.duration = legs.duration.text;
            routeDetails.route.start = legs.start_address;
            routeDetails.route.end = legs.end_address;
            RoutesList.addRoute(routeDetails.route);
            $scope.$apply();
        } else {
            ErrorService.addError('There are no results!')
            $state.go('routes');
        }
    });
}
