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
    if (message.author.bot) return;
  
    const args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix

    let JoinCode = '';  
    let JoinCode2 = '#' + JoinCode
    for (let i = 0; i < 3; i++) {
        const x = GenerateE();
        JoinCode += x;    
    }
    function GetLowerCase()  {
        return LowerCase[Math.floor(Math.random() *
            LowerCase.length)] 
    }
    function GetNumber()  {
        return Numbers[Math.floor(Math.random() *
            Numbers.length)] 
    }
    function GenerateE() {
        const XS = []
        XS.push(GetLowerCase())
        XS.push(GetNumber())
        return XS[Math.floor(Math.random() * XS.length)
        ]
    }

    if (message.content.toLocaleLowerCase = 'russian') {
        const Numbers = '0123456789';
        const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const RussianRoulette = [];
        RussianRoulette.push(message.author.username + ', ') 
        var RandomName=  Math.floor((Math.random() * RussianRoulette.length));
        var RandomNames= RussianRoulette[RandomName];
        message.channel.send(RandomNames)
        message.channel.send( '#' + JoinCode)
    }
    if (message.content.toLocaleLowerCase = JoinCode2) {
        RussianRoulette.push(message.author.username + ', ')
    }




})


client.login(process.env.Token);