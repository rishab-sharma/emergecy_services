
(function() {
  var PUBNUB, channel, message;

  PUBNUB = require("pubnub").init({
    publish_key: "demo",
    subscribe_key: "demo",
    uuid: "your_name_here" + Math.floor(Math.random() * 1000)
  });

  channel = process.argv[2];

  message = process.argv[3];

  console.log("sending " + (JSON.stringify(message)) + " to #" + channel);

  PUBNUB.publish({
    channel: channel,
    message: message,
    callback: function() {
      console.log("message sent.");
      return process.exit();
    }
  });

}).call(this);
