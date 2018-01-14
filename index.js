const Discord = require("discord.js");

const PREFIX = "?";

const TOKEN = "NDAwMzYzODk3NDM1MTkzMzQ0.DTtTIA.ws-p5bMi6cZLrknParstNtbyXPM";

var bot = new Discord.Client();

const talkedRecently = new Set();

bot.on("message", function(message) {
    console.log(message.content);
});

bot.login(TOKEN);

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            const embed = new Discord.RichEmbed()
            .setTitle("StrayBoots Official Discord Bot")
            .setDescription("If you want a new alt account/second account write >getalt")
            .setThumbnail("http://householdairfresheners.com/wp-content/uploads/2017/02/Perfect-S-Logo-Design-75-For-Your-free-logo-designer-with-S-Logo-Design.jpg")
            .setFooter("Join our discord here: https://discord.gg/hQCbvAk");
            message.channel.send({embed});
            break;
        case "getalt":
        if (talkedRecently.has(message.author.id))
    return;
  
  // Adds the user to the set so that they can't talk for 2.5 seconds
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after 2.5 seconds
    talkedRecently.delete(message.author.id);
  }, 600000);
        var request = require('request');
        var a = [];
        request('https://pastebin.com/raw/F2qt099n',function (error,response,body) 
            {
             if (!error && response.statusCode == 200) {
             a.push(body);
             var arr = a.toString().split("\n");
             var splitted = arr[Math.floor(Math.random() * arr.length)];
            }
            message.author.send(splitted);
            message.author.send("If you believe your account is not working, send a message to Wrymex.");
            message.channel.send(message.author + ", you have now received an NFA user! \Wait ** 10 minutes ** before trying this command again.");
            }); 
         break;
             case "changelog":
            message.channel.send("| 13.01.2018 | StrayBoots bot founded");
            message.channel.send("| 14.01.2018 | The getalt command got 10 minutes cooldown.");
            break;
            client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
      break;
        default:
            message.channel.send("Unknown command, please use the ?help command.");
            break;
    }
});
