(function () {
    'use strict';

    angular
        .module('ngClassifieds')
        .controller('ClassifiedsCtrl', ClassifiedsCtrl)

    ClassifiedsCtrl.$inject = [];

    function ClassifiedsCtrl () {
        var vm = this;
        vm.name = 'Randy';

    }
})();