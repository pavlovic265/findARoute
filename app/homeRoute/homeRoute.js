import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './homeRoute.routes';
import HomeRouteController from './homeRoute.controller';
import RoutesList from '../services/routesList.services';

export default angular.module('app.home', [uirouter, RoutesList])
    .config(routing)
    .controller('HomeRouteController', HomeRouteController)
    .name;
