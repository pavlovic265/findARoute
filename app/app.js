import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import homeRoute from './homeRoute/homeRoute.js';
import errors from './errors/errors.js';

angular.module('app', [uirouter, homeRoute, errors])
    .config(routing);
