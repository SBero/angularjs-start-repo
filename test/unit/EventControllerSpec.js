'use strict';

describe('EventController', function(){
    var scope, $controllerConstructor;

    beforeEach(module('eventsApp'));

    beforeEach(function($controller, $rootScope){
        scope = $rootScope.$new();



        $controllerConstructor = $controller;
    });

    it('should set the scope events to the result of eventData.event', function(){
        var mockEvents = {};

        var ctrl = $controllerConstructor('EventController', {$scope: scope, eventData: {}});

        expect(scope.events).toBe(mockEvents);
    })
})