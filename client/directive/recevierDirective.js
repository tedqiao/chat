angular.module('myapp').directive('recevierMsg',function(){
    return {
		restrict: 'AE',
		templateUrl : 'views/chat/recevierMsg.html',
	    scope:{
	    	message:'@message',
            Id:'@id'
	    },
		link: function (scope, iElement, iAttrs) {
			
		}
    }  
});