require('dotenv').config();
const token = process.env.TOKEN;
const Discord = require('discord.js');
const APIres = require('./FetchAPI')
const Day = require('./DateCalc');
const client = new Discord.Client();

const prefix = '()';

client.once('ready', () => {
    console.log('ONLINE');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();


    if (command === 'today') {
        const getData = await APIres.execute(Day.dayWeek, Day.schoolWeek);
        message.channel.send(getData)
        return;
    }

    if (command === 'tomorrow') {
        const getData = await APIres.execute(Day.dayWeekNext, Day.schoolWeekNext);
        message.channel.send(getData)
        return;
    }
});

client.login(token);