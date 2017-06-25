import angular from 'angular';

ErrorService.$inject = [];

function ErrorService(){
    let errors = [];

    function clearErrors() {
        errors.length = 0;
    }

    function getErrors() {
        return errors;
    }

    function removeError(error) {
        let index = errors.indexOf(error);
        errors.splice(index, 1);
    }

    function addError(error) {
        if(-1 === errors.indexOf(error)) {
            errors.push(error)
        }
    }

    return { getErrors, removeError, addError, clearErrors };
}

export default angular.module('services.error', [])
    .service('ErrorService', ErrorService)
    .name;