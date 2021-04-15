import dotenv from 'dotenv';
import getIntent from './cognitive/index';

var Discord = require('discord.io');
var logger = require('winston');

dotenv.config();

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.DISCORD_BOT_TOKEN,
   autorun: true
});

bot.on('ready', function (evt) {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    console.log(message);

    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     } else if (message.substring(0, 1) === '#') {
         var msg = message.substring(1);

         getIntent(msg).then((res) => {
             console.log(res);
             bot.sendMessage({
                 to: channelID,
                 message: `Intent: ${res.topIntent}, prediction score: ${res.score}, entities: ${JSON.stringify(res.entities)}`,
             });
         });
     }
});
