angular.module('myapp').directive('senderMsg',function(){
    return {
		restrict: 'AE',
		templateUrl : 'views/chat/senderMsg.html',
	    scope:{
	    	message:'@message',
            Id:'@id'
	    },
		link: function (scope, iElement, iAttrs) {
			
		}
    }  
});