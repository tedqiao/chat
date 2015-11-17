
var mqtt = require('mqtt')
 
client = mqtt.connect('ws://localhost:1884');
 
client.subscribe('topic/presence',{qos:1});
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log("topic:"+topic);
  console.log(message.toString());
});

var num = 0;
setInterval(function (){
  client.publish('topic/presence', 'Hello mqtt ' + (num++),{qos:1, retain: true});
    console.log('send:'+num);
}, 1000);