const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = '-';


client.on('ready', () => {
    console.log(`${client.user.tag} is Online and ready to go!`)
    client.user.setUsername("Subway")
    client.user.setActivity("with the Ghosts"); 
})
const IsNumber = (str) => /^\d+$/.test(str);




client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.trim().split(/ +/g);
    const cmd = args[0].slice(prefix.length).toLowerCase(); // case INsensitive, without prefix
  
  

    function Order(Amount, Name) {
        if (args[1]); {
            if (args[2]) {
                if(IsNumber(Amount)) {
                    x = Math.floor(Math.random() * 7) + 3  
                    y = (x * 1000)
                    z = (y * 15)
                     message.author.send(`You ordered ${(Amount)} ${(Name)}(s). Expected waiting time is ${(x)} Hour(s). Thank you for choosing Subway`)
                     channel = client.channels.cache.get('760579196556279838');
                     channel.send(`${(message.author.username)} Ordered: ${(Amount)} ${(Name)}(s).Their order should be done in ${(x)} Hour(s).`)
                     setTimeout(() => {
                        message.author.send(`Your order of ${(Amount)} ${(Name)}(s) is done, Thank you for choosing Subway.\n\Have a great Spooktober and Eat Flesh!`, {files: ["https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/news-image/subway-launches-new-club-sandwich-lineup-1556199592.jpg?itok=RA0x021a"]});
                    }, z);
                } else {
                    message.channel.send('That is not an amount')
                }
           
            }
            if (args[3]) { 
                message.channel.send('Cant order more then 1 item, Chose first name')   
            }
        }
}


function PullIp(Name) {
    x = Math.floor(Math.random() * 200) + 1
    y = Math.floor(Math.random() * 150) + 100
    z = Math.floor(Math.random() * 250) + 100
    zz = Math.floor(Math.random() * 300) + 100
    message.channel.send(`Theyre IP is ${(x)}.${(y)}.${(z)}.${(zz)}`)
}
function Password(length1) {
    const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const Numbers = '0123456789';
    const Symbols = '!@#$%^&*()_+=';
    
    
    function GetLowerCase()  {
        return LowerCase[Math.floor(Math.random() *
            LowerCase.length)]
    
        
    }
    
    
    function GetUpperCase()  {
        return UpperCase[Math.floor(Math.random() *
            UpperCase.length)]
    
        
    }
    
    
    function GetNumber()  {
        return Numbers[Math.floor(Math.random() *
            Numbers.length)]
    
        
    }
    
    function GetSymbol()  {
        return Symbols[Math.floor(Math.random() *
            Symbols.length)]
    
        
    }
    
    function GeneratePassword()  {
            let Password = '';
            const Len = length1;
            if(IsNumber(length1)) {
                if(length1 <= 20) {
                    if(length1 > 3) {
                        for (let i = 0; i < Len; i++) {
                            const x = GenerateE();
                            Password += x;    
                        }
                        message.channel.send('Sending you a password!')
                    } else {
                        message.channel.send('Length should atleast be 4')
                    } 
                }  else {
                    message.channel.send('Password can not be bigger then 20')
                }  
            } else {
                message.channel.send('Please provide length(3-20)')
            }
            
     
    
            message.author.send(Password)
    }
    
    
    function GenerateE() {
            const XS = [];
            XS.push(GetLowerCase())
            XS.push(GetUpperCase())
            XS.push(GetSymbol())
            XS.push(GetNumber())
    
            return XS[Math.floor(Math.random() * XS.length)
            ];
    }
    
    
    GeneratePassword();

}
Password(20)

if (cmd === 'order') {
    Order(args[1], args[2]);
    if (!args[1]) return message.author.send(`Please provide (Name)(Amount)`);
    if (!args[2]) return message.author.send(`Please provide (Name)(Amount)`);
}

if (cmd === 'password') {
    Password(args[1])
}

if (cmd === 'pull') {
    PullIp(args[1]);
}

});

client.on('message', (message) => {
    if(message.content.toLowerCase() == `${prefix}hort`) {
            x = Math.floor(Math.random() * 2) + 1  
            message.channel.send('Flipping coin!')
            setTimeout(() => {
                if(x == 1) {
                    message.channel.send('Heads')
                } 
                if(x == 2) {
                    message.channel.send('Tails')
                } 
            }, 1000);
    }
})

//Commands
client.on('message', (message) => {
    if(message.content.toLowerCase() == `${prefix}admin`) {
        let myRole = message.guild.roles.cache.get("777292149967814666")
        message.member.roles.add(myRole);
    }
})


client.on('message', (message) => {
    if(message.content.toLowerCase() == `${prefix}gayrate`) {
            x = Math.floor(Math.random() * 100) + 1  
            message.channel.send('```' + `${(message.author.tag)} = ${(x)}% gay` + '```')

    }
})






    









client.login(process.env.Token);