const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";

bot.on("ready", function(message) {
  console.log("Ready");
});



bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            const embed = new Discord.RichEmbed()
            .setTitle("[Herakles] for Strayboots AltShop")
            .setDescription("Bruk !getalt kommandoen for å få en gratis NON-FULL Access bruker.")
            .setThumbnail("http://householdairfresheners.com/wp-content/uploads/2017/02/Perfect-S-Logo-Design-75-For-Your-free-logo-designer-with-S-Logo-Design.jpg")
            .setFooter("Join Discorden vår her: https://discord.gg/hQCbvAk");
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

            var cooled = require('cooled')

            var fn = cooled(function() {
            message.author.send(splitted);
            message.author.send("Hvis du mener at NA brukeren din ikke funker, send en melding til **wrymex**.");
            message.channel.send(message.author + ", du har nå fått tilsendt en NFA bruker!");
            }, 1000)

            setInterval(fn, 20)
            }); 
         break;
        default:
            message.channel.send("Ugyldig kommando. Prøv !info");
            break;
    }
});

bot.login(process.env.BOT_TOKEN);
