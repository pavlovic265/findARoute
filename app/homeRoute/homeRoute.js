import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './homeRoute.routes';
import HomeRouteController from './homeRoute.controller';
import RoutesList from '../services/routesList.services';
import RouteForm from '../services/routeForm.service';

export default angular.module('app.home', [uirouter, RoutesList, RouteForm])
    .config(routing)
    .controller('HomeRouteController', HomeRouteController)
    .name;
