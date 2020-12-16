const Discord = require('discord.js');
const client = new Discord.Client();


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
    if (message.content.toLocaleLowerCase = 'russian') {
        const RussianRoulette = [];
        RussianRoulette.push(message.author.username + ', ') 
        var RandomName=  Math.floor((Math.random() * RussianRoulette.length));
        var RandomNames= RussianRoulette[RandomName];
        message.channel.send(RandomNames)
    }




})


client.login(process.env.Token);