const Discord = require('discord.js');
const client = new Discord.Client();
const sqlite = require('sqlite3').verbose();

let prefix = '-';


client.on('ready', () => {
    console.log(`${client.user.tag} is Online and ready to go!`)
    client.user.setUsername("Russian roulette")
    client.user.setActivity("In the snow"); 
})
const IsNumber = (str) => /^\d+$/.test(str);



client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix
    if (message.content.toLocaleLowerCase = 'Russian') {
        const RussianRoulette = [];
        RussianRoulette.push(message.author.username) 
    }




})


client.login(process.env.Token);