import 'bootstrap/dist/css/bootstrap.css';
import 'angular-toastr/dist/angular-toastr.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import toastr from 'angular-toastr';
import nganimate from 'angular-animate';

import config from './app.config';
import home from './homeRoute/homeRoute.js';

angular.module('app', [uirouter, nganimate, toastr, home])
    .config(config.routing)
    .config(config.toastr);
