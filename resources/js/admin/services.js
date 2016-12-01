/**
 * Created by bappy on 11/27/16.
 */

(function() {
    'use strict';
    angular
        .module('home.controllers', ['home.services', 'ui.select', 'ngAnimate'])
        .controller('HomeController', HomeController)
        .controller('LoginController', LoginController);

    function HomeController ($scope) {
        $scope.authError = false;
    }

    function LoginController ($scope, $state, toaster, HomeServices) {
        $scope.submit = function(user) {
            $state.go('dashboard');
        };
    }

})();
