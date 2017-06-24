import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import homeRoute from './homeRoute/homeRoute.js';

angular.module('app', [uirouter, homeRoute])
    .constant('GOOGLE_API', {
        'URL' : 'https://maps.googleapis.com/maps/api/directions/json',
        'KEY': 'AIzaSyBj_FS2naYF-iT06-nXk_3lhCQEQQrCYbg'
    })
    .config(routing);
