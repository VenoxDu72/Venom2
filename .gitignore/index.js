const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("faire une V2");
    console.log("Le bot a bien étét connecté");
});

bot.login("NTEyNjg3MTY0ODI4NDE4MDQ5.Ds9d4Q.jzRUtGqBPicpeC-PYR6rpSh0ujY");
