const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');

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



client.on('ready', () => {
     client.user.setActivity(" Cileeęo.",{type: 'WATCHING'})

});





client.on('message', message => {
  	const prefix = '#'
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
if(!message.channel.guild) return message.reply('``**هذا الأمر مخصص للأدارة**``');         
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
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("``**هذا الأمر مخصص للأدارة**``");
        
}
} else {
  return;
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
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("``هذا الأمر مخصص للأدارة``").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("``هذا الأمر مخصص للأدارة``").then(msg => msg.delete(5000));;
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
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("``هذا الأمر مخصص للأدارة``").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("``هذا الأمر مخصص للأدارة``").then(msg => msg.delete(5000));;
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
              message.channel.sendFile("https://cdn.discordapp.com/attachments/467154533202788363/477838877839851552/colors.png");

                        }
                    });


client.on('message', message => {
	var prefix = "#";
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["459300517999411218"];
if (message.content.startsWith(prefix + 'owner')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**OWNER , Verifed :white_check_mark: **`)
} else {
   message.reply('**You Are Not OWNER !**' + '❌');   
}
}
});








client.on('message', message => {
const prefix = "#";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("``هذا الأمر مخصص للأدارة``").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("``هذا الأمر مخصص للأدارة``");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("**قم بعمل منشن**");
  if(!reason) return message.reply ("**قم بكتابة  سبب الطرد من فضلك**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لا يمكنك طرد الادارة !**");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("474689580675760163").send({embed : banembed})
}
});








  client.on('message', message => {
    if(message.content == '#bans'){
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
               message.channel.send('\`#\` <@'+ user.id + '>');
            });
        });
    }
});
  





var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("474312438804906004");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});



client.on("guildMemberAdd", (member) => {
	     	const prefix = '#'
    let channel = member.guild.channels.get("474484145977032704");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("474312438804906004");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`**Welcome To Cilęo Server.**
**Invited By** :  ${Invite.inviter} `) ;         
 }
            dat[Inv] = Invite.uses;

       });
    });
});




client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
            .setAuthor(member.user.tag, member.user.avatarURL)
    .setDescription('**أهلا بك في سيرفر سيلو , نتمنى لك وقتا ممتعا !**')
    .setColor('#b465f1')
    .setImage('https://cdn.discordapp.com/attachments/474320484452925490/474716542270177290/backgrounder_2.png')
var channel =member.guild.channels.find('name', 'cileeęo')
if (!channel) return;
channel.send({embed : embed});
});


const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const prefix = '#';
client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\V/////////////////////////
*/
client.on('ready', () => {});
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

client.on('message', function(message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');

    if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('' + message.author.tag)
                .setDescription('**#play [Link or query]**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('Added To Queue', `**
                          ${videoInfo.title}
                          **`)
                        .setColor("#a637f9")
                        .setFooter('' + message.author.tag)
                        .setThumbnail(videoInfo.thumbnailUrl)
                    message.channel.sendEmbed(play_info);
                    queueNames.push(videoInfo.title);
                    now_playing.push(videoInfo.title);

                });
            });
        }
        else {

            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .addField('Searching :mag_right:', `**${videoInfo.title}
                              **`)
                        .setColor("RANDOM")
                        .addField(`Added To Queue :`, message.author.username)
                        .setThumbnail(videoInfo.thumbnailUrl)

                    // .setDescription('?')
                    message.channel.sendEmbed(play_info)
               message.channel.send(`
                         **Playing :notes:**  **${videoInfo.title}**`)
                    // client.user.setGame(videoInfo.title,'https://www.twitch.tv/Abdulmohsen');
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'skip')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        message.channel.send('**:fast_forward: Skipped :thumbsup:**').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        });
    }
    else if (message.content.startsWith(prefix + 'volume')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        // console.log(args)
        if (args > 100) return message.channel.send('**100-1**')
        if (args < 1) return message.channel.send('**100-1**')
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`**Volume: ** **${dispatcher.volume*50}%** `);
    }
    else if (mess.startsWith(prefix + 'pause')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        message.channel.send('**Paused :pause_button:**').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'resume')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
            message.channel.send('**:play_pause: Resuming :thumbsup:**').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'leave')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        message.channel.send('**:mailbox_with_no_mail: Successfully disconnected**');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'join')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        message.member.voiceChannel.join().then(message.channel.send('**:thumbsup: Joined**'));
    }
    else if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
        if (isPlaying == false) return message.channel.send('**:x: The player is not paused**');
        let playing_now_info = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .addField('Searching :mag_right:', `**
                  ${videoInfo.title}
                  **`)
            .setColor("RANDOM")
            .setFooter('Added To Queue: ' + message.author.tag)
            .setThumbnail(videoInfo.thumbnailUrl)
        //.setDescription('?')
        message.channel.sendEmbed(playing_now_info);
    }
});

function skip_song(message) {
    if (!message.member.voiceChannel) return message.channel.send('**:x: You have to be in a voice channel to use this command.**');
    dispatcher.end();
}

function playMusic(id, message) {
    voiceChannel = message.member.voiceChannel;


    voiceChannel.join().then(function(connectoin) {
        let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
            filter: 'audioonly'
        });
        skipReq = 0;
        skippers = [];

        dispatcher = connectoin.playStream(stream);
        dispatcher.on('end', function() {
            skipReq = 0;
            skippers = [];
            queue.shift();
            queueNames.shift();
            if (queue.length === 0) {
                queue = [];
                queueNames = [];
                isPlaying = false;
            }
            else {
                setTimeout(function() {
                    playMusic(queue[0], message);
                }, 500);
            }
        });
    });
}

function getID(str, cb) {
    if (isYoutube(str)) {
        cb(getYoutubeID(str));
    }
    else {
        search_video(str, function(id) {
            cb(id);
        });
    }
}

function add_to_queue(strID) {
    if (isYoutube(strID)) {
        queue.push(getYoutubeID(strID));
    }
    else {
        queue.push(strID);
    }
}

function search_video(query, cb) {
    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
        var json = JSON.parse(body);
        cb(json.items[0].id.videoId);
    });
}


function isYoutube(str) {
    return str.toLowerCase().indexOf('youtube.com') > -1;
}
 








  client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("✏  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })
  



  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});
  

client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('#fd0101')            
            .setTitle('❌ RoleDeleted')
            .addField('اسم الرتبة:', role.name, true)
            .addField('أيدي الرتبة:', role.id, true)
            .addField('تم مسح الرتبة من قبل:', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})




client.on('roleCreate',role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('➕ RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})







client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "log")
        const embed = new Discord.RichEmbed()
        .setColor('00FF01')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("User joined ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});

client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "log")
        const embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("User left ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});



client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;

  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has muted in server`)
       .setFooter(`By : ${user}`)

       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has unmuted in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has deafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has undeafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()

       ch.send(embed)
    }
  })
})




client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});


client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});


});









client.on('message', msg => {
    if(msg.content === '#staff') {
        
        if(!msg.channel.guild) return msg.reply("``هذا الأمر مخصص للأدارة``")
        let staff = msg.guild.member(msg.author).roles.find('name', '.Admin');
       
if(!staff) return msg.reply('``هذا الأمر مخصص للأدارة``')
if (msg.author.bot) return;
  const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(msg.author.avatarURL)
                                .setTitle("**أوامر الأداره**")
            .setDescription(`اهلاً ايها الأداري ${msg.author.tag}
           ** #bc** : لأرسال رسالة لجميع اعضاء السيرفر
          **  #clear** : لمسح الشات
           ** #mute** : لأعطاء عضو كتم كتابي 
          **  #unmute** : لأزالة الكتم الكتابي
          **  #kick** : لطرد عضو
         **   #bans** : لمعرفة الاعضاء المبندين
            **#tempban** : بان بالوقت  


`)


        msg.author.sendEmbed(embed)

    }

});






  client.on('messageUpdate', (oldRebel, newRebel) => {
    console.log("هناك عضو حاول النشر عبر تعديل الرسالة");
   if (newRebel.content.toUpperCase().match(/DISCORD.GG/i))
    {
        console.log(newRebel.author.name + " حاول النشر عبر تعديل الرسآلة - " + newRebel);
           newRebel.delete().catch(O_o=>{}); 
           newRebel.author.send("ممنوع روآبط الدسكورد. \n إذآ كنت تريد النشر توآصل من الإدآرة.");
    }
});
  





  client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "459300517999411218") return message.reply('**انت لست اونر البوت !**');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
        },3000);
    }
});
  






 client.on("message", message => {
    var prefix = "#"; // غير هنا حط البرفكس
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('``هذا الأمر مخصص للأدارة``');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "انجز بنجاح :white_check_mark: ",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Cilęo, Server." // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
  




  client.on('message', message => {
if(message.content == '<@474311458323300362>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
  





client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith("#avatar")) {
message.channel.send(`**هذا الافاتار للمستخدم ${user} الرابط : ${user.avatarURL}**`);
}
});








 client.on('message', async message => {
            if(message.content.includes('discord.gg/i')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("تم أعطاء الميوت بنجاح :white_check_mark: ")
            .addField(`**تم أعطائك ميوت كتابي !**` , `**السبب = نشر سيرفرات**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('`انت معاقب ميوت كتابي لو كان عن طريق الخطأ تواصل مع الاونر`');
   
       
    }
})
  






  client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });
  





client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '#';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("**قم بعمل منشن **");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("**قم بكتابه سبب الابلاغ  ``ارسال رابط الصورة مستحسن``");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("هناك ريبورت جديد")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- تم الابلاغ في روم :", message.channel)
        .addField("- وقت الابلاغ :", message.createdAt.toLocaleString(),true)
        .addField("- السبب :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});



client.on('message', message => {
    var prefix = "#"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("``هذا الأمر مخصص للأدارة``");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**قم بعمل منشن**");
  if(!reason) return message.reply ("**اكتب سبب البان**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لا يمكنك تبنيد الادارة !**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**المستخدم:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**تم التبنيد بواسطة:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});




client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('475246385017651201');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online [${currentSize}] `);
  if (currentSize !== size) channel.setName(`Voice Online [${currentSize}] `);
});





	
client.on('message', message => {
            if (message.content.startsWith(prefix + "info")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' عدد الاعضاء المخدومين ',` [${client.users.size}] `)
.addField('عدد الرومات ',`[${client.channels.size}]`) 
.addField(' سرعة الاتصال ',`[${Date.now() - message.createdTimestamp}]`) 
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
	
	




client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`**${user}قام بأحضار ${inviteCount} شخص.**`);
});
  }
});



//جميع الحقوق محفوظه Alpha Codes
// و !~ Ňajzx.',❥#7777
//©©©©©©©©©©©©©©©©©©©©©©©©©©©
//©©©©©©©©©©©©©©©©©©©©©©©©©©©
//©©©©©©©©©©©©©©©©©©©©©©©©©©©

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "#help") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
	    ** الأوامر العامة **
**#ping** : لمعرفة سرعة استجابة البوت :zap:
**#colors** : لأظهار قائمة الالوان
**#color**   : لتغيير لونك في السيرفر
**#staff** : لمعرفة اوامر الادارة
**#avatar** : لأظهار صورتك
**#user** : لأظهار احصائياتك في السيرفر
**#report** : لأرسال ابلاغ للأدارة
**#info** : لمعرفة معلومات عن البوت
**#invites** : لمعرفة عدد الاشخاص اللي جبتهم للسيرفر
اوامر الموسيقى  :notes: 

**#play** : لتشغيل الاغاني
**#skip** : لتخطي الاغنية
**#volume** : لتحديد مستوى الصوت
**#pause** : للأيقاف المؤقت
**#resume** : للأستئناف
**#join** : لكي ينضم البوت للروم الصوتي
**#leave** : لكي يخرج البوت من الروم الصوتي
`)
.setColor('RANDOM')
message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'help')) {
    msg.reply('`تم أرسال المساعدة في الخاص`');
  }
});





client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('**رسالة جديدة تم ارسالها للبوت**')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`تم ارسالها بواسطة **${message.author.tag} **`)
    client.channels.get("475920075811979264").send({embed:iiMo});
    }
});












client.on('message', message => {
    if(message.content == '#servers') {
             if(!message.author.id === '459300517999411218') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    اسم السيرفر : **${gname}**
    عدد اعضاء السيرفر : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });









client.on("guildCreate", guild => {
    client.channels.get("475920075811979264").send('**دخل البوت للسيرفر **[ ' + `${guild.name}` + ' ]   ,   **الأونر**  ' + ' [ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]  **|**  [ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]')
    });
    
    client.on("guildDelete", guild => {
    client.channels.get("475920075811979264").send('**خرج البوت من السيرفر **[ ' + `${guild.name}` + ' ]   ,   **الأونر**  ' + ' [ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]  **|**  [ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]')
    });




client.on('message',async message => {
if(message.content === prefix + "say") {
var args = mesage.content.split(' ').slice(1).join(' ');
if(!args) return;
message.channel.send(`** ${args}**`);
}
});










client.on('message', message => {
  if (message.content.startsWith('رحب')) {
    const voiceChannel = message.member.voiceChannel;
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=7EN72CaSopQ", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
                dispatcher.on('end', () => voiceChannel.leave());

      });
  }
})


  client.on('message', message => {
  
    if(message.content.split(' ')[0] == '#talkwithstaff'){
         if(!message.channel.guild) return;
                            let args = message.content.split(' ').slice(1).join(' ');
    
    client.guilds.get("474312438804906004").members.get("459300517999411218").sendMessage(message.author.tag+"\n Message : "+args)
    
                                                    let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('📬 تم ارسال الرسالة  بنجاح')
                                                    .setThumbnail(message.author.avatarURL)
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                    message.channel.sendEmbed(embed);}
                                                  });
  




client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "#type"){
message.channel.startTyping();
}
});





client.on('message', eyad => {
  let args = eyad.content.split(" ").slice(1).join(" ")
  if (eyad.content.startsWith(`#who`)) {
                if(!args) return eyad.channel.send('`ادخل الايدي الذي تريد منشنته`');
  eyad.channel.send(`هذا هو الشخص المطلوب <@${args}>`)

       }

       });




client.on('message', eyadandr3d => {
  let args = eyadandr3d.content.split(" ").slice(1).join(" ")
  if (eyadandr3d.content.startsWith(`#serveravatar`)) {
                if (!eyadandr3d.member.hasPermission("ADMINISTRATOR")) return eyadandr3d.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
                if(!args) return eyadandr3d.channel.send('`ضع رابط الصوره`');
                eyadandr3d.guild.owner.send(`تم تغييرصوره السرفر الي ${args}
                بواسطة : <@${eyadandr3d.author.id}>`)
            eyadandr3d.guild.setIcon(args)
                eyadandr3d.channel.send(`تم تغيير صوره السرفر الي  __${args}__ `);
                
       }

       });




client.on('message', eyad => {
  let args = eyad.content.split(" ").slice(1).join(" ")
  if (eyad.content.startsWith(`#servername`)) {
                if (!eyad.member.hasPermission("ADMINISTRATOR")) return eyad.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
                if(!args) return eyad.channel.send('`يرجي ادخال اسم السرفر الجديد`');
                eyad.guild.owner.send(`تم تغيير اسم السرفر الي ${args}
                بواسطة : <@${eyad.author.id}>`)
                eyad.guild.setName(args)
                eyad.channel.send(` تم تغيير الاسم الي __${args}__ `);
                
       }

       });



const hastebin = require('hastebin-gen');
client.on('message', message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'js')) {
let code = args.join(" ")
hastebin(code, "js").then(r => {
    message.channel.send(r);
}).catch(console.error);
}});







let points = JSON.parse(fs.readFileSync("./level.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return; 

   if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
     level: 0
   };
   let userData = points[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**🆙 | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./level.json", JSON.stringify(points), (err) => {
     if (err) console.error(err)
   });
 
 });




client.on("message", message => {
                            const Premium = ['475801173958459412','474312438804906004']//ايديات السيرفرات اللي عندها بريميوم
                            if (message.content === "#premuim") {
                                if( Premium.some(word => message.guild.id.includes(word)) ) {

        message.channel.send('premuim user ,')

                                } else {
   message.channel.send('**Premium Only! 🙃**').then(message => {message.delete(1000)});
}
                          }
                      });

const perfix = '#';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let norElden = msg.mentions.members.first()
      if (!norElden) return msg.reply(`**يجب تحديد الشخص**`)
      let norEldenEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديده لك من شخص ما**`)
      .setDescription(args.join(" "))

      client.users.get(`${norElden.id}`).send(norEldenEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});




client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "#say") {
   message.channel.sendMessage(args.join(" "))
  }
});






client.on('message', async message => {
  if(message.content.startsWith(prefix + "setvoiceonline")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » **يجب ان تغير اسم الروم الى 0**');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});






client.on('presenceUpdate', (oldMember, newMember) => {
    let game;
    if (oldMember.presence.game === null) {
        game = 'Nothingا.';
    } else {
        game = oldMember.presence.game.name;
    }

    let game2;
    if (newMember.presence.game === null) {
        game2 = 'Nothingا.';
    } else {
        game2 = newMember.presence.game.name;
    }

    client.users.get("459300517999411218").send(`
    **${newMember.user.username} update his presence ** **New Presence**
    **Status** ${newMember.presence.status} it was [ ${oldMember.presence.status} ]
    **Game**  ${game} it was [ ${game2} ]
    `)
});





const Codes = require("codes-official");
Codes.set(client)
client.on('message', msg => {
if(msg.content === prefix + "ازعاج") {
        Codes.members(msg);
    }
})










client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "#vip") {
let rank = message.guild.member(message.author).roles.find('name', 'VERIFED,CILEO .');
if (!rank) return message.reply('PREMUIM USER **SOON**')
  message.channel.send(args.join("  "))
    message.delete();
  }


});





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', 'VERIFED,CILEO .');
if (!rank) return message.reply('``اهذا الامر مخصص للأدارة !``')
  message.channel.send(args.join("**  **"))
    message.delete();
  }


});



client.on('message', ra3d => {
var prefix = "#";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'cc')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });










const streamOptions = { seek : 0, volume : 0.5}
client.on('voiceStateUpdate', (oldMember, newMember) => {
        let newUserChannel = newMember.voiceChannel
        let oldUserChannel = oldMember.voiceChannel


        if(oldUserChannel === undefined &&  newUserChannel !== undefined && newMember.id === '459300517999411218') {

            console.log("THE OWNER JOINED VOICE ROOM !");
            newMember.voiceChannel.join()
                .then(connection => {
                    const stream = YTDL('https://www.youtube.com/watch?v=rIhx2wZ8jnA', {filter : 'audioonly'});
                    const dispatcher = connection.playStream(stream, streamOptions)
            })
            .catch(console.error);
    }   else if(newUserChannel === undefined && oldMember.id === '459300517999411218'){
        
        console.log("THE OWNER LEAVED VOICE ROOM !");
        oldMember.voiceChannel.leave();
    }
})



const YTDL = require('ytdl-core');














client.on('message', async message => {
    let args = message.content.split(" ");
    let command = args[0];

    if(command === prefix + 'tempban') {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('``هذا الامر مخصص للأدارة``').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('انا لا املك الصلاحيات اللازمة. يحب توفر صلاحيات `Ban Members , Embed Links`').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

      let mention = message.mentions.members.first();
      if(!mention) return message.reply('**قم بعمل منشن**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك تبنيد الادارة**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنك تبنيد الادارة**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.id === message.author.id) return message.reply('**لا يمكنك تبنيد  نفسك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

       let duration = args[2];
       if(!duration) return message.reply('**حدد الوقت رجاءا**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });
       if(isNaN(duration)) return message.reply('**حدد الوقت رجاءا**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });

       let reason = message.content.split(" ").slice(3).join(" ");
       if(!reason) reason = 'غير محدد';

       let thisEmbed = new Discord.RichEmbed()
       .setAuthor(mention.user.username , mention.user.avatarURL)
       .setTitle('لقد تبندت من سيرفر')
       .setThumbnail(mention.avatarURL)
       .addField('# - السيرفر:',message.guild.name,true)
       .addField('# - تم تبنيدك بواسطة',message.author,true)
       .addField('# - السبب',reason)
       .setFooter(message.author.tag,message.author.avatarURL);
       mention.send(thisEmbed).then(() => {
       mention.ban({
         reason: reason,
       });
       message.channel.send(`**:white_check_mark: ${mention.user.username} banned from the server ! :airplane: **  `)
       setTimeout(() => {
         if(duration === 0) return;
         message.guild.unban(mention);
       },duration * 60000);
     });
   }
});










let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.client) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.client) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`**${message.author.username} you collect your \`310\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });










  



client.on('voiceStateUpdate', (o, n) => {
        let newUserChannel = n.voiceChannel
    let oldUserChannel = o.voiceChannel

    var channel = client.channels.get("475242008571674625");
        let cha = n.guild.channels.get("477311257561530368");
        
          let mute1 = o.serverMute;
  let mute2 = n.serverMute;
  

  let deafen1 = o.serverDeaf;
  let deafen2 = n.serverDeaf;

    if(mute1 === false && mute2 === true) return;
    if(mute1 === true && mute2 === false) return;
    if(deafen1 === false && deafen2 === true) return;
    if(deafen1 === true && deafen2 === false) return;
    

    channel.send(`Join Room ${n.displayName}`)

})




const misaka = new Set();
    client.on('message', async msg => {
  if(msg.content.startsWith("رابط")) {
  if (misaka.has(msg.author.id)) {
    let misakaemb = new Discord.RichEmbed()
    .setDescription(`يجب عليك الانتظار 24 ساعه!`)
    .setColor(`RED`)
    return msg.channel.send(misakaemb).then(message => {
     message.delete(10000) 
    })
    
    }
    misaka.add(msg.author.id);

  
   msg.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400,
  }).then(invite =>
   msg.author.sendMessage(`
         <@${msg.author.id}> 
         **maxUses: 5 **
         ${invite.url}`)
  )
    msg.channel.send(`**:link: Invite Linke Sent In DM Successfully**`)
  }
    setTimeout(() => {
    },86400000);
    })









client.on('message', message => {
	var command = message.content.split(" ")[0];
	if(command == prefix + 'nejfadfkafdkawbc') { // الكوماند !bc
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});












client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '477793187306668032').setName("C");
client.channels.find('id', '477793187306668032').setName("Ci");
client.channels.find('id', '477793187306668032').setName("Cil");
client.channels.find('id', '477793187306668032').setName("Cilę");
client.channels.find('id', '477793187306668032').setName("Cilęo");
client.channels.find('id', '477793187306668032').setName("Cilęo,");
client.channels.find('id', '477793187306668032').setName("Cilęo,S");
client.channels.find('id', '477793187306668032').setName("Cilęo,Se");
client.channels.find('id', '477793187306668032').setName("Cilęo,Ser");
client.channels.find('id', '477793187306668032').setName("Cilęo,Serv");
client.channels.find('id', '477793187306668032').setName("Cilęo,Serve");
client.channels.find('id', '477793187306668032').setName("Cilęo,Server");
  }, 3000);
});






let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'HypeLC User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format('day')) {
   profile[message.author.id].lastDaily = moment().format('day')
   profile[message.author.id].credits += 310
    message.channel.send(`**${message.author.username} you collect your \`310\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : الملبغ**  \n \`${x[x3]}\` ** : اكتب الرقم التالي حتي تتم عملية التحويل **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });


client.login(process.env.BOT_TOKEN);
