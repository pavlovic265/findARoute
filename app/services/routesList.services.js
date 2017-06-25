import angular from 'angular';

RoutesList.$inject = [];

function RoutesList(){
    let routes = [],
        service = { getRoutes, addRoute, removeRoute };

    return service;

    function getRoutes() {
        if( routes.length === 0 && localStorage.getItem('routes')){
            routes = JSON.parse(localStorage.getItem('routes'));
        }
        return routes;
    }

    function addRoute(route) {
        var exitRoute = routes.find(function(item){
            return (function(route1, route2){
                for (let property in route1) {
                    if (route1.hasOwnProperty(property) && route2.hasOwnProperty(property)) {
                        if(route1[property] !== route2[property]){
                            return false;
                        }
                    }
                }
                return true;
            })(item, route)
        });

        if(angular.isUndefined(exitRoute)) {
            routes.push(route);
            localStorage.setItem('routes', JSON.stringify(routes));
        }
    }

    function removeRoute(route) {
        let startIndex = -1;
        routes.find(function(item, index){
            startIndex = index;
            return item.start === route.start && item.end === route.end;
        });

        if(startIndex !== -1) {
            routes.splice(startIndex, 1)
        }
        localStorage.setItem('routes', JSON.stringify(routes));
    }
}

export default angular.module('services.routes-list', [])
    .service('RoutesList', RoutesList)
    .name;