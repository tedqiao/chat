angular.module('myapp').controller("chatController",function($scope,$compile,chatFactory){
    $scope.client_id = "";
    $scope.topic = "";
    $scope.message = "";
    $scope.client = "";
     var connect = function(){
        //console.log(chatFactory.options)
        if( $scope.client_id === "")
            return;
        
        var options = chatFactory.options;
            options.clientId=$scope.client_id;
        var host = chatFactory.host;
            $scope.client=mqtt.connect(host, options);
            $scope.client.subscribe('topic');
            $scope.client.on('message', function (topic, message) {
              // message is Buffer
              
              var MSG=JSON.parse(message)
              if(MSG.Id!==$scope.client_id)
              appendReceviedMsg(MSG.Msg,MSG.Id)
              console.log("topic:"+topic);
              console.log(MSG.Msg,MSG.Id);
            });
        
    };
    
    
    var send = function(){
        console.log($scope.message);
        $scope.client.publish('topic',JSON.stringify({Id:$scope.client_id,Msg:$scope.message}),function(){
            console.log($scope.message);
            appendSentMsg($scope.message,$scope.client_id);
            $scope.message="";
        });
    };
    
    
    var appendSentMsg = function(message){
        $('.panel-body').append($compile("<div sender-msg message='"+message+"' Id='"+ $scope.client_id+"'></div>")($scope));
                };
    
    var appendReceviedMsg = function(message,id){
         $('.panel-body').append($compile("<div recevier-msg message='"+message+"' Id='"+id+"'></div>")($scope));
                };
    
    $scope.send=send;
    $scope.connect=connect;
        
   
});