import angular from 'angular';
import toastr from 'angular-toastr';

ErrorService.$inject = [toastr];

function ErrorService(toastr){
    let errors = [],
        service = { getErrors, removeError, addError, clearErrors };

    return service;

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
        window.test1 = toastr;
        window.test2 = errors;
        if(-1 === errors.indexOf(error)) {
            toastr.error(error, 'Error', {
                closeButton: true,
                onTap: function() {
                    service.removeError(error);
                },
                onHidden: function(){
                    service.removeError(error);
                }
            });
            errors.push(error)
        }
    }

}

export default angular.module('services.error', [])
    .service('ErrorService', ErrorService)
    .name;