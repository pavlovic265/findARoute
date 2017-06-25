
RouteDetailsController.$inject = ['$state', '$stateParams'];

export default function RouteDetailsController($state, $stateParams) {
    let routeDetails = this;
        routeDetails.route = {
            start: $stateParams.start,
            end: $stateParams.end
        }

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: new google.maps.LatLng(-37.812150, 144.971008),
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directionsPanelBody'));

    directionsService.route({
            origin: $stateParams.start,
            destination: $stateParams.end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
