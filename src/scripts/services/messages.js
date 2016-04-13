angular
.module('appMessages', [])
.factory('messages', [
  '$firebaseObject',
  function($firebaseObject) {
    var ref = new Firebase("https://chat-now-app.firebaseio.com");
    var fireObj = $firebaseObject(ref);

    var messages = {
      
      get: function() {

      },

      post: function() {

      }

    };

    return messages;
  },
]);
