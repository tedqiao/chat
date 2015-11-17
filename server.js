var mosca = require("mosca");
var express = require("express");
var http = require("http");
var app = express();
var srv = http.createServer(app);
var path = require("path");

var broker = new mosca.Server({
  http: {
    port: 1884,
    bundle: true,
    static: './'
  }
});


broker.on('ready', setup);
 
// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
};
// fired whena  client is connected
broker.on('clientConnected', function(client) {
  console.log('client connected', client.id);

});
 
// fired when a message is received
broker.on('published', function(packet, client) {
  console.log('Published : ', packet.payload);
});
 
// fired when a client subscribes to a topic
broker.on('subscribed', function(topic, client) {
  console.log('subscribed : ', topic);
});
 
// fired when a client subscribes to a topic
broker.on('unsubscribed', function(topic, client) {
  console.log('unsubscribed : ', topic);
});
 
// fired when a client is disconnecting
broker.on('clientDisconnecting', function(client) {
  console.log('clientDisconnecting : ', client.id);
});
 
// fired when a client is disconnected
broker.on('clientDisconnected', function(client) {
  console.log('clientDisconnected : ', client.id);
});


app.use(express.static(path.dirname(require.resolve("mosca")) + "/public"));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/'));

app.get('/',function (req, res) {
  console.log('load test page'); // /admin
  res.reander('index.html');
});


app.listen(3000);