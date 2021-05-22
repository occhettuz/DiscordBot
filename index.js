const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('message', (message) => {
    var listMessageContent = message.content.split("")
    if (message.content == "!time") {
        var data = new Date();
		var ora = parseInt(data.getHours())+2;
		var minuto = data.getMinutes();

		message.channel.send('ORARIO ATTUALE :alarm_clock: ' + ora + ':' + minuto);
    } else if (message.content == 'mi senti?') {
        console.log(message.author.id)
        if (message.author.id == '493453529109889025' || message.author.id == '434435376250224650' || message.author.id == '691221421111902209' || message.author.id == '705091422432395326') { //find isma code
            message.channel.send('isma gay')
        }
    } else if (listMessageContent.splice(0, 9).join("") == "!roulette") {
        //play roulette function
        var pick = listmessageContent.splice(10, listMessageContent.length)
        roulette(pick).then(response => {
            message.channel.send(response)
        })
    }
})

function roulette(bet) { //bet: black, red, or green
    //37 caselle: num.0 è verde, i pari sono neri e i dispari sono rossi
    var chosenBox = Math.floor(Math.random()*10)
    if (bet == "green" && chosenBox == 0) {
        return ("You won! :chart_with_upwards_trend: :rocket:")
    } else if (bet == "black" && chosenBox%2 == 0) {
        return ("You won! :chart_with_upwards_trend: :rocket:")
    } else if (bet == "red" && chosenBox%2 != 0) {
        return ("You won! :chart_with_upwards_trend: :rocket:")
    } else {
        return ("You lost :chart_with_downwards_trend: :poop:")
    }
}

var date = new Date()
console.log('[' + date + '] Bot is online')

/*
CODICI PERSONE DS:
ismail: 705109981711696004
zambe: 493453529109889025
ceria: 691221421111902209
mora: 434435376250224650
occhetta: 705091422432395326
*/
