import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './homeRoute.routes.js';
import HomeRouteController from './homeRoute.controller.js';

export default angular.module('app.route', [uirouter])
    .config(routing)
    .controller('HomeRouteController', HomeRouteController)
    .name;
