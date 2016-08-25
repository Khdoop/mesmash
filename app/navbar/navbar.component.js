(function() {
'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('app')
        .component('navbarComponent', {
            templateUrl: 'app/navbar/navbar.component.html',
            controller: NavbarController,
            bindings: {
                
            },
        });

    //NavbarController.$inject = [];
    function NavbarController() {
        var navbarVM = this;
        

        ////////////////

        navbarVM.$onInit = function() { };
        navbarVM.$onChanges = function() { };
        navbarVM.$onDestory = function() { };
    }
})();