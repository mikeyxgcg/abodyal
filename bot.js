const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === 'aراتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'aمبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'aمبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === 'aراتب'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === 'aمبلغ'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === 'aراتب'){
        message.channel.send('#daily')
    }
});


client4.on('message', message => {
    if(message.content === 'aمبلغ'){
        message.channel.send('#credits')
    }
});

client4.on('message', message => {
    if(message.content === 'aراتب'){
        message.channel.send('#daily')
    }
});

client5.on('message', message => {
    if(message.content === 'aمبلغ'){
        message.channel.send('#credits')
    }
});

client5.on('message', message => {
    if(message.content === 'aراتب'){
        message.channel.send('#daily')
    }
});

client6.on('message', message => {
    if(message.content === 'aراتب'){
        message.channel.send('#daily')
    }
});

client6.on('message', message => {
    if(message.content === 'aمبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === 'aspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === 'aspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === 'aspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === 'aspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === 'aspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === 'aspam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
        var prefix = "a1";  // البريفكس
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) { // الامر
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

client2.on('message', message => {
        var prefix = "a2";  // البريفكس
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) { // الامر
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });


client3.on('message', message => {
        var prefix = "a3";  // البريفكس
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) { // الامر
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

client4.on('message', message => {
        var prefix = "a4";  // البريفكس
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) { // الامر
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

client5.on('message', message => {
        var prefix = "a5";  // البريفكس
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) { // الامر
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

client6.on('message', message => {
        var prefix = "a6";  // البريفكس
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) { // الامر
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });

client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);// لا تغير فيها شيء
client4.login(process.env.TOKEN4);// لا تغير فيها شيء
client5.login(process.env.TOKEN5);// لا تغير فيها شيء
client6.login(process.env.TOKEN6);// لا تغير فيها شيء
