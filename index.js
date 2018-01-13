const Discord = require("discord.js");

const PREFIX = "?";

const TOKEN = "NDAwMzYzODk3NDM1MTkzMzQ0.DTtTIA.ws-p5bMi6cZLrknParstNtbyXPM";

var bot = new Discord.Client();

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
                message.channel.send(message.author + ", there you have a new account.");
                }); 
             break;
             case "changelog":
             message.channel.send("| 13.01.2018 | StrayBoots bot founded");
            break;
        default:
            message.channel.send("Sorry, but i cant find your command.");
            break;
    }
});
