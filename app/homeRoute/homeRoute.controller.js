
HomeRouteController.$inject = ['RoutesList', 'RouteForm'];

export default function HomeRouteController(RoutesList, RouteForm) {
    let homeRoute = this;
        homeRoute.route = {};

    homeRoute.routes =  RoutesList.getRoutes();
    homeRoute.addRoute = RoutesList.addRoute;
    homeRoute.removeRoute = RoutesList.removeRoute;

    homeRoute.searchRoute = RouteForm.searchRoute;

}
