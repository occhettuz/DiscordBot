const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('ODQ0ODY0ODc3MzYxMTAyODQ4.YKYnuw.q7wuUNKwi7kMlsHQu0Tij4i63A0');

bot.on('message', (message) => {
    if (message.content == "!time") {
        var data = new Date();
		var ora = data.getHours();
		var minuto = data.getMinutes();

		message.channel.send('ORA ATTUALE :alarm_clock::' + ora + ':' + minuto);
    } if (message.content == 'mi senti?') {
        console.log(message.author.id)
        if (message.author.id == '493453529109889025' || message.author.id == '434435376250224650' || message.author.id == '691221421111902209') { //find isma code
            message.channel.send('isma gay')
        }
    }
})

var date = new Date()
console.log('[' + date + '] Bot is online')

/*
CODICI PERSONE DS:
zambe: 493453529109889025
ceria: 691221421111902209
mora: 434435376250224650
*/