angular
.module('appMessages', [])
.factory('messages', [
  '$firebaseArray',
  function($firebaseArray) {
    var ref = new Firebase("https://chat-now-app.firebaseio.com/messages/");
    var fireArr = $firebaseArray(ref);

    var messages = {

      get: function(cb) {
        fireArr.$watch(function(event) {
          cb(fireArr);
        });
      },

      post: function(inputs, cb) {
        fireArr.$add(inputs).then(function(ref) {
          cb();
        });
      }

    };

    return messages;
  },
]);
