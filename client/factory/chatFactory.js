angular.module('myapp').factory("chatFactory", function () {
    var client_id='';
    
    var host='ws://localhost:1884';
    
    var options = {
                    keepalive: 10,
                    clientId: client_id,
                    protocolId: 'MQTT',
                    protocolVersion: 4,
                    clean: true,
                    reconnectPeriod: 1000,
                    connectTimeout: 30 * 1000,
                    will: {
                        topic: 'WillMsg',
                        payload: 'Connection Closed abnormally..!',
                        qos: 0,
                        retain: false
                    },
                    username: 'demo',
                    password: 'demo',
                    rejectUnauthorized: false
                };

    return {
            host:host,
            options:options
            };
    });
