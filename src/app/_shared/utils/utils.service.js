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
                    }

                };
                return exports;
            }]);
})();
