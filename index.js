const Discord = require("discord.js");

const TOKEN = "NDAwMzU5MzM3MTkwNzUyMjU2.DTgNeQ.6Mebh6R-HyqnOy5jX6MY-KbEpsg";
const PREFIX = "!";

var bot = new Discord.Client();

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").send(member.toString() + " velkommen til serveren!");
});

bot.on("ready", function(message) {
  console.log("Ready");
});



bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
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
            message.author.send("Hvis du mener at NA brukeren din ikke funker, send en melding til wrymex.");
            message.channel.send(message.author + ", du har nå fått tilsendt en NA bruker på PM!");
            }); 
         break;
        default:
            message.channel.send("Ugyldig kommando.");
    }
});

bot.login(process.env.BOT_TOKEN);
