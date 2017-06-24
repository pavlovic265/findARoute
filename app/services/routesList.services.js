import angular from 'angular';

RoutesList.$inject = [];
function RoutesList(){
    var routes = [];
    if(localStorage.getItem('routes')){
        routes = localStorage.getItem('routes');
    }

    function getRoutes() {
        return routes;
    }

    function addRoute(route) {
        routes.add(route);
    }

    function removeRoute(route) {
        var startIndex = -1;
        routes.find(function(item, index){
            startIndex = index;
            return item.start === route.start && item.end === route.end;
        });

        if(startIndex !== -1) {
            routes.splice(startIndex, 1)
        }
    }

    return { getRoutes, addRoute, removeRoute };


}

export default angular.module('services.routes-list', [])
    .service('RoutesList', RoutesList)
    .name;