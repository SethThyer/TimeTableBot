require('dotenv').config();
const token = process.env.TOKEN;
const Discord = require('discord.js');
const APIres = require('./FetchAPI')
const Day = require('./DateCalc');
const client = new Discord.Client();

const prefix = '()'

client.once('ready', () => {
    console.log('ONLINE');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    // ----------------------------------------COMMANDS BEGIN----------------------------------------

    if (command === 'today') {
        const getData = await APIres.execute(Day.dayWeek, Day.schoolWeek);
        message.channel.send(getData)
        return;
    }

    if (command === 'tomorrow') {
        message.channel.send(Day.dayWeekNext)
        return;
    }

    // ----------------------------------------COMMANDS DEBUG----------------------------------------

    if (message.author.id !== '411456780628000769') return;
    if (command === 'debug:count'){
        const getData = await APIres.execute();
        message.channel.send(getData);
        return;
    }
});

client.login(token);