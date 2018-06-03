const { Plugin } = require("../cloudy")

const plugin = new Plugin("hello", { // "hello" is the plugin ID
  name: "Hello world!" // If missing ID will be used
  version: "1.0.0",
  author: "Foo bar",
  description: "Have a nice day!",
})

plugin.setCommand("hello", function(message){
  message.channel.send("Hello world!")
})

module.exports = plugin;
