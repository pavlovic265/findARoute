import angular from 'angular';

RoutesList.$inject = [];
function RoutesList(){
    var routes = [];
    if(localStorage.getItem('routes')){

    }

    return {

    };
}

export default angular.module('services.routes-list', [])
    .service('RoutesList', RoutesList)
    .name;