angular
  .module('MessagesController', [
    'appMessages',
  ])
  .controller('MessagesController', [
    'messages',
    '$location',
    function (messages, $location) {
      var msgsCtrl = this;

      msgsCtrl.messages;

      msgsCtrl.inputs = {
        'user': '',
        'message': ''
      };

      messages.get(function(msgs) {
        msgsCtrl.messages = msgs;
        console.log(msgs);
        console.log('Messages Fetched.');
      });

      msgsCtrl.sendMsg = function(inputs) {
        messages.post(inputs, function() {
          console.log('Message Posted.');
        });
        msgsCtrl.inputs = {
          'user': msgsCtrl.inputs.user,
          'message': ''
        };
      }
    },
  ]);
