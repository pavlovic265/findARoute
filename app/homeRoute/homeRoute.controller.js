
HomeRouteController.$inject = ['RoutesList', 'RouteForm'];

export default function HomeRouteController(RoutesList, RouteForm) {
    let homeRoute = this;
        homeRoute.route = {
            start: '',
            end: '',
            searching: false,
            myLocation: false,
            distance: '',
            duration: ''
        };

    homeRoute.routes =  RoutesList.getRoutes();

    console.log('homeRoute.routes');
    console.log(homeRoute.routes);

    homeRoute.addRoute = RoutesList.addRoute;
    homeRoute.removeRoute = RoutesList.removeRoute;

    homeRoute.searchRoute = RouteForm.searchRoute;
}
