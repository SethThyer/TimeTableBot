const fetch = require('node-fetch');
const url = 'http://localhost:3000/find/';
const Discord = require('discord.js');

module.exports = {
    async execute(day, week) {
        let err = null;
        const uri = url + `${week}/${day}`;
        const data = await fetch(uri).then(res => res.json())
        .catch(error => {
            console.log(error)
            err = "ERROR: " + JSON.stringify(error);
        })
        if (err != null) return err

        function FormatClasses() {
            let fields = [];
            for (let i = 0; i < 6; i++) {
                const period = 'p' + i.toString();

                if(!data.classes[period].on){
                    fields.push({ name: `Period ${i}`, value: 'No class this period.', inline: true },)
                }
                else {
                    fields.push({ name: `Period ${i}`, value: `${data.classes.p0.class} |Starts: ${data.classes.p0.startTime}| Ends: ${data.classes.p0.endTime}`, inline: true },)
                }
            }
            return fields;
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#B53B3B')
        .setTitle(`${day} Week${week}`)
        .setURL('https://calendar.google.com/calendar/u/0/embed?src=calendar@bhcs.vic.edu.au&ctz=Australia/Sydney&pli=1')
        .setAuthor('School Timetable', null, 'https://seththyer.herokuapp.com/')
        .addFields(FormatClasses())
        .addFields({ name: '\u200B', value: '\u200B' })
        .setTimestamp();

        return(embed);
    }
}