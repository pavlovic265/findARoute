import angular from 'angular';
import uirouter from 'angular-ui-router';

import RoutesList from '../services/routesList.services';
import RouteForm from '../services/routeForm.service';

import routing from './homeRoute.routes';
import HomeRouteController from './homeRoute.controller';
import details from './routeDetails/reouteDetails';

export default angular.module('app.routes', [uirouter, RoutesList, RouteForm, details])
    .config(routing)
    .controller('HomeRouteController', HomeRouteController)
    .name;
