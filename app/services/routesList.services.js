import angular from 'angular';

RoutesList.$inject = [];

function RoutesList(){
    let routes = [];

    function getRoutes() {
        if( routes.length === 0 && localStorage.getItem('routes')){
            routes = JSON.parse(localStorage.getItem('routes'));
        }

        return routes;
    }

    function addRoute(route) {
        routes.push(route);
        localStorage.setItem('routes', JSON.stringify(routes));
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

    return { getRoutes, addRoute, removeRoute };


}

export default angular.module('services.routes-list', [])
    .service('RoutesList', RoutesList)
    .name;