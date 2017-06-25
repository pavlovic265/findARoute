import 'bootstrap/dist/css/bootstrap.css';
import 'angular-toastr/dist/angular-toastr.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import toastr from 'angular-toastr';

import routing from './app.config';
import home from './homeRoute/homeRoute.js';
import errors from './errors/errors.js';

angular.module('app', [uirouter, toastr, home, errors])
    .config(routing)
    .config(function(toastrConfig) {
        angular.extend(toastrConfig, {
            allowHtml: false,
            closeButton: true,
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            tapToDismiss: true,
            timeOut: 5000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    });
