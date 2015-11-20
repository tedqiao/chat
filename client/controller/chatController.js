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
            //connect to server
            $scope.client=mqtt.connect(host, options);
         
            //fire on when connect to server
            $scope.client.on('connect', function() {
                console.log('connected');
                
              //subscribe a topic
              $scope.client.subscribe('topic',{qos:1},function(err, granted){
                    if(err){
                      console.log('subscribe failed');  
                    }else{
                      console.log(granted);
                    };
              });
         
              //fire on when recevie a message
              $scope.client.on('message', function (topic, message) {
              // message is Buffer
              
              var packet=JSON.parse(message)
              if(packet.Id!==$scope.client_id)
              appendReceviedMsg(packet.Msg,packet.Id)
//              console.log("topic:"+topic);
//              console.log(packet.Msg,packet.Id);
            });
            });
            
           
        
    };
    
    //publish a message
    var send = function(){
//        console.log($scope.message);
       $scope.client.publish('topic',
                             JSON.stringify({Id:$scope.client_id,
                                             Msg:$scope.message}),
                                            {qos:1,retain:true},
                                            function(){
//                console.log($scope.message);
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