(function(){
    var serviceId = 'ordersService';
    angular.module('app').factory(serviceId, ['common', '$q', '$resource', '$routeParams', orders_service]);

    function orders_service(common, $q, $resource, $routeParams){
        // Rails RESTful API
        return $resource('http://localhost:3000/orders/:order_id.json',{
                order_id: '@order_id'
            },
            {
                request: function(request){
                    //console.log(request);
                },
                requestError: function(rejection){
                    //console.log(rejection);
                },
                response: function(response){
                    //console.log(response);
                },
                responseError: function(rejection){
                    //console.log(rejection);
                }

            }
        );
    }

})();