angular.module('myapp').directive('recevierMsg',function(){
    return {
		restrict: 'AE',
		templateUrl : 'views/chat/recevierMsg.html',
	    scope:{
	    	message:'@message'
	    },
		link: function (scope, iElement, iAttrs) {
			
		}
    }  
});