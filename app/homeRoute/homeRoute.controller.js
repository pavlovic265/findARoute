
HomeRouteController.$inject = ['RoutesList'];

export default function HomeRouteController(RoutesList) {
    let homeRoute = this;

    homeRoute.routes =  RoutesList.getRoutes();
    homeRoute.addRoute = RoutesList.addRoute;
    homeRoute.removeRoute = RoutesList.removeRoute;
}
