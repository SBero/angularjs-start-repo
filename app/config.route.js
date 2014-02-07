/**
 * AngularJS Routes Setup
 * --Note: This configuration seems to have problems with IE8.
 */
(function () {
    'use strict';

    var app = angular.module('app');

    // Collect the routes
    app.constant('routes', getRoutes());
    
    // Configure the routes and route resolvers
    app.config(['$routeProvider', '$httpProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, $httpProvider, routes) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }

    // Define the routes 
    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="glyphicon glyphicon-home"></i> Dashboard'
                    }
                }
            },
            {
                url: '/projects',
                config: {
                    templateUrl: 'app/projects/projects.html',
                    title: 'projects',
                    settings: {
                        nav: 2,
                        content: '<i class="glyphicon glyphicon-list"></i> Projects'
                    }
                }
            }
        ];
    }
})();