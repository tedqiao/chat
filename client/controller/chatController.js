angular.module('myapp').controller("chatController",function($scope,chatFactory){
    $scope.client_id="";
    $scope.topic="";
    $scope.message="";
    $scope.client="";
     var connect =function(){
        //console.log(chatFactory.options)
        if( $scope.client_id==="")
            return;
        
        var options=chatFactory.options;
            options.clientId=$scope.client_id;
        var host=chatFactory.host;
            $scope.client=mqtt.connect(host,options);
            $scope.client.subscribe('topic');
            $scope.client.on('message', function (topic, message) {
              // message is Buffer
              console.log("topic:"+topic);
              console.log(message.toString());
            });
        
    };
    
    
    var send=function(){
        console.log($scope.message);
        $scope.client.publish ('topic',$scope.message,function(){
            console.log('this is cb');
            $scope.message="";
        });
    };
    
    
    $scope.send=send;
    $scope.connect=connect;
        
   
});