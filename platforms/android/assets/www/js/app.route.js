(function () {
    'use strict';
    
    var RouterConfig = function ($stateProvider, $urlRouterProvider) {
        var states = [
            { 
                name: 'main', 
                url: '/',      
                // abstract: true,           
                templateUrl: 'js/main/main.html',
                controller: 'MainController',
                resolve: {
                    people: function() {
                        return true;
                    }
                }
            }
        ];

        states.forEach((state) => $stateProvider.state(state));

        $urlRouterProvider.otherwise('/');  
    };
    
    angular.module('app').config(RouterConfig);        

})();