(function () {
    'use strict';
    angular.module('app.shared.utils')
        .service('utilsService', [
            function () {
                var exports = {
                    validateForm(form) {
                        if (form.$invalid) {
                            angular.forEach(form.$error, function (field) {
                                angular.forEach(field, function (errorField) {
                                    errorField.$setTouched();
                                });
                            });
                            return false;
                        }
                        return true;
                    },
                    setUntouched(form) {
                        form.$setUntouched();
                    },
                    generateId(arr) {
                        if (!arr[0]) {
                            return 1;
                        }
                        return +(arr[0].id) + 1;
                    },
                    checkIfPastDate(date) {
                        var dateNow = new Date();
                        var dateToCheck = new Date(date);
                        return ((dateNow.getTime() - dateToCheck.getTime()) > 0);
                    }

                };
                return exports;
            }]);
})();
