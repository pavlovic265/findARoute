
ErrorController.$inject = ['ErrorService'];

export default function ErrorController(ErrorService) {
    let errorCtrl = this;

    errorCtrl.errors = ErrorService.getErrors();
    errorCtrl.addError = ErrorService.addError;
    errorCtrl.removeError = ErrorService.removeError;
    errorCtrl.clearError = ErrorService.clearError;

}
