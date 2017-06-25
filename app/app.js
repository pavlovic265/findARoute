import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
// import googleMapas from 'google-maps';

import routing from './app.config';
import home from './homeRoute/homeRoute.js';
import errors from './errors/errors.js';

angular.module('app', [uirouter, home, errors])
    .config(routing);
