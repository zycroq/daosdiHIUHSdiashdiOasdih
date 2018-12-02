const Discord = require("discord.js");

const PREFIX = "!";
const OwnerID = "461100606334173184";

const talkedRecently = new Set();

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("MatrixGEN | Ready");

    bot.user.setStatus('Online')

    bot.user.setGame('Generating accounts!', 'https://twitch.tv/xderyz')
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
        var embed = new Discord.RichEmbed()
        .setTitle("MatrixGEN | Command List")
        .addField("!fortnite", "Send's you a **Fortnite Account**.")
        .addField("!spotify", "Send's you a **Spotify Account**.")
        .setColor("#005ce6")
        .setFooter("Matrix - Command List", message.author.avatarURL)
        .setThumbnail(message.author.avatarURL)
        message.channel.sendEmbed(embed);
        break;
        case "spotify":
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
        request('https://pastebin.com/raw/4CYcwHjk',function (error,response,body) 
            {
             if (!error && response.statusCode == 200) {
             a.push(body);
             var arr = a.toString().split("\n");
             var splitted = arr[Math.floor(Math.random() * arr.length)];
            }
            var embed = new Discord.RichEmbed()
            .setTitle("Matrix » Spotify")
            .setDescription(splitted)
            .setColor("#ff0000")
            message.author.sendEmbed(embed);
            var embed = new Discord.RichEmbed()
            .setTitle("Empathy » Spotify")
            .setDescription(message.author + ", a Spotify account has been sent to you.")
            .setColor("#009933")
            message.channel.sendEmbed(embed);
        }); 
         break;
        default:
        var embed = new Discord.RichEmbed()
            .setTitle("Matrix » Error")
            .setDescription("Invalid command.")
            .setColor("#9900ff")
            message.channel.sendEmbed(embed);
    }
});

bot.login(process.env.BOT_TOKEN);
