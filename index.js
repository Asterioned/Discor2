const Discord = require('discord.js');
const client = new Discord.Client();
const sqlite = require('sqlite3').verbose();

let prefix = '-';


client.on('ready', () => {
    console.log(`${client.user.tag} is Online and ready to go!`)
    client.user.setUsername("Gambler")
    client.user.setActivity("with the Ghosts"); 
    let db = new sqlite.Database('./Databse.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
})
const IsNumber = (str) => /^\d+$/.test(str);




client.on('message', message => {
    let db = new sqlite.Database('./Databse.db', sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE)
    db.run(`CREAT TABLE IF NOT EXISTS data(userid INTEGER NOT NULL, username TEXT NOT NULL, coins INTEGER NOT NULL)`)
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix

    if(message.content.toLowerCase() == `${prefix}admin`) {
        let myRole = message.guild.roles.cache.get("777292149967814666")
        message.member.roles.add(myRole);
    }
  

})


client.login(process.env.Token);