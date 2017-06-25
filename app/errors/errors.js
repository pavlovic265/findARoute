import angular from 'angular';

import ErrorController from './errors.controller';
import ErrorsSrvice from '../services/error.services';

export default angular.module('app.error', [])
    .controller('ErrorController', ErrorController)
    .name;
