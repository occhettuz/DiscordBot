const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('message', (message) => {
    if (message.content == "!time") {
        var data = new Date();
		var ora = data.getHours();
		var minuto = data.getMinutes();

		message.channel.send('ORARIO ATTUALE :alarm_clock:: ' + ora + ':' + minuto);
    } if (message.content == 'mi senti?') {
        console.log(message.author.id)
        if (message.author.id == '493453529109889025' || message.author.id == '434435376250224650' || message.author.id == '691221421111902209' || message.author.id = '705091422432395326') { //find isma code
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
occhetta: 705091422432395326
*/
