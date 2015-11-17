angular.module('myapp').controller("chatController",function($scope,chatFactory){
    $scope.connect=function(){
        //console.log(chatFactory.options)
        var options=chatFactory.options;
        var host=chatFactory.host;
        var client=mqtt.connect(host,options)
            client.subscribe("topic", { qos: 0 });
            client.on('message', function (topic, message) {
              // message is Buffer
              console.log("topic:"+topic);
              console.log(message.toString());
            });
        $scope.chat = 'connected';
        
    };
    $scope.chat = 'this is chat!!!';
});