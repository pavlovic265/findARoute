
HomeRouteController.$inject = ['RoutesList', 'RouteForm', '$state'];

export default function HomeRouteController(RoutesList, RouteForm, $state) {
    let homeRoute = this;
        homeRoute.route = {
            searching: false,
            distance: '',
            duration: ''
        };

    homeRoute.routes =  RoutesList.getRoutes();
    homeRoute.addRoute = RoutesList.addRoute;
    homeRoute.removeRoute = RoutesList.removeRoute;

    homeRoute.searchRoute = RouteForm.searchRoute;
    homeRoute.routeDetails = function(){
        $state.go('details', { 'start': homeRoute.route.start, 'end': homeRoute.route.end });
    };
}
