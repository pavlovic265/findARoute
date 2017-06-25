import angular from 'angular';

//CONFIG FOR ROUTER
routing.$inject = ['$urlRouterProvider', '$locationProvider'];
function routing($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
}

//CONFIG FOR TOASTER, A.K.A. pop up messages
toastr.$inject = ['toastrConfig'];
function toastr(toastrConfig) {
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
    }
export default { routing, toastr };

