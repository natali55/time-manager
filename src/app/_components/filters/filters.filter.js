(function () {
    'use strict';

    angular.module('app.components.filters')
        .filter('highlight', function ($sce) {
            return function (text, phrase) {
                if (phrase) {
                    var regex = new RegExp('('+phrase+')', 'gi');
                    return $sce.trustAsHtml(text.replace(regex, '<span class="highlighted-word-note">$1</span>'));
                }
                return $sce.trustAsHtml(text);
            };
        })
})();
