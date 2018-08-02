const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});




client.on('message', message => {
  	const prefix = '#'
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**PERM Not Founded** :warning:   ");
        
}
} else {
  return;
}
});



client.on('message', message => {
       const prefix = '#'
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**أنت لا تملك الصلاحيات ! :x:**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت لا تملك الصلاحيات ! :x:** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**هل أنت متأكد من مسح الشات ؟**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.send(`**تم مسح الشات ** `);

})
reaction2.on("collect", r => {
message.channel.send(`**مسح الشات الغي !**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('#ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**PING :**',api + " ms ⚡ ")
         message.channel.send({embed:embed});
                        }
                    });


client.on('message', message => {   
if (message.author.boss) return;
var prefix = "#";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You Need High Perm For Do That ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Bot Need high Perms For Do That ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** Role Not Find 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('https://images-ext-1.discordapp.net/external/Lwjc5bv_OQy-6TAKgpWL3EwmGeLqDQdlx-0vzdiYaiM/https/cdn.pg.sa/n4eSIakPew.png').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**Muted  :zipper_mouth: **",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("You Need High Perm For Do That").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("Bot Need high Perms For Do That").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** Role Not Find 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('https://images-ext-1.discordapp.net/external/Lwjc5bv_OQy-6TAKgpWL3EwmGeLqDQdlx-0vzdiYaiM/https/cdn.pg.sa/n4eSIakPew.png').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("** Unmuted!** ",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`**UnMuted,** ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});




const developers = ["459300517999411218","389136174154907651",""]
const adminprefix = "#";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'playing')) {
    client.user.setGame(argresult);
          if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField("**PLAYING :video_game:    **","** **")
         message.channel.send({embed:embed});
                        }
  
     if (message.content === (adminprefix + "leaveserver")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'watching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
         if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField("**WATCHING :video_camera:   **","** **")
         message.channel.send({embed:embed});
                        }
  
  if (message.content.startsWith(adminprefix + 'listening')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
       if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField("**LISTENING :musical_score:  **","** **")
         message.channel.send({embed:embed});
                        }
  
  if (message.content.startsWith(adminprefix + 'streaming')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
        if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField("**STREAMING  :space_invader: **","** **")
         message.channel.send({embed:embed});
                        }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**Changing The Name To , :zap: ****${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**Changing The Avatar To , :zap: ****${argresult}** `);
}
});





client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '#color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('#colors')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
              message.channel.sendFile("https://cdn.discordapp.com/attachments/467154533202788363/474462484984627211/colors.png");

                        }
                    });


client.on('message', message => {
	var prefix = "#";
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["389136174154907651"];
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`Owner HERE ! :x:`)
} else {
   message.reply('**You Are Not OWNER !**' + '❌');   
}
}
});

client.login(process.env.BOT_TOKEN);
