var mqtt    = require('mqtt');
var client  = mqtt.connect('ws://localhost:1884');

client.on('connect', function () {
  client.subscribe('topic/presence');
  client.publish('topic/presence', 'Hello mqtt',function(){
    console.log("connect to server let's chat");
  });
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log("topic:"+topic);
  console.log(message.toString());
});