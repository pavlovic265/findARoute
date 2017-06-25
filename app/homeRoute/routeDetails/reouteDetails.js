import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './reouteDetails.routes';
import RouteDetailsController from './reouteDetails.controller';

export default angular.module('app.routes.details', [uirouter])
    .config(routing)
    .controller('RouteDetailsController',  RouteDetailsController)
    .name;
