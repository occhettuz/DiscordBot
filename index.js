const Discord = require('discord.js');
const bot = new Discord.Client();

//bot.login(process.env.token);
bot.login("ODQ0ODY0ODc3MzYxMTAyODQ4.YKYnuw.jwHsrHR9Q1tx2Tz7HstlJdF9ITE")

bot.on('message', (message) => {
    var listMessageContent = message.content.split("")
    console.log()
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
        var bet = listMessageContent.splice(1, listMessageContent.length).join("")
        //bet: black, red, or green
        //37 caselle: num.0 è verde, i pari sono neri e i dispari sono rossi
        var chosenBox = Math.floor(Math.random()*37)
        var result = "";
        if (bet == "green" && chosenBox == 0) {
            result = "You won! :chart_with_upwards_trend: :rocket:"
        } else if (bet == "black" && chosenBox%2 == 0) {
            result = "You won! :chart_with_upwards_trend: :rocket:"
        } else if (bet == "red" && chosenBox%2 != 0) {
            result = "You won! :chart_with_upwards_trend: :rocket:"
        } else {
            result = "You lost :chart_with_downwards_trend: :poop:"
        }
        message.channel.send(result)
    }
})

/* function roulette(bet) { //bet: black, red, or green
    //37 caselle: num.0 è verde, i pari sono neri e i dispari sono rossi
    var chosenBox = Math.floor(Math.random()*10)
    var result = "";
    if (bet == "green" && chosenBox == 0) {
        result = "You won! :chart_with_upwards_trend: :rocket:"
    } else if (bet == "black" && chosenBox%2 == 0) {
        result = "You won! :chart_with_upwards_trend: :rocket:"
    } else if (bet == "red" && chosenBox%2 != 0) {
        result = "You won! :chart_with_upwards_trend: :rocket:"
    } else {
        result = "You lost :chart_with_downwards_trend: :poop:"
    }
    return (result)
} */

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
