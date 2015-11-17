
angular
    .module('myapp')
    .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /chat
  $urlRouterProvider.otherwise("/chat");
  //
  //set up the states
  $stateProvider
    .state('chat', {
      url: "/chat",
      templateUrl: "chat/chat.html",
      controller :"chatController",
      controllerAs:"cc"
    });
});