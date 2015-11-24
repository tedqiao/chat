angular.module('myapp').factory("chatFactory", function () {
    var client_id='';
    var friends_list=['Jhon','Flash','Hawken'];
    var groups_list=[];
    
    var host='ws://localhost:1884';
    
    
    var options = {
                    keepalive: 900,
                    clientId: client_id,
                    protocolId: 'MQTT',
                    protocolVersion: 4,
                    clean: false,
                    reconnectPeriod: 1000,
                    connectTimeout: 30 * 1000,
                    will: {
                        topic: 'WillMsg',
                        payload: 'Connection Closed abnormally..!',
                        qos: 0,
                        retain: false
                    },
                    rejectUnauthorized: false
                };

    return {
            host:host,
            options:options,
            friends_list:friends_list,
            groups_list:groups_list
            };
    });
