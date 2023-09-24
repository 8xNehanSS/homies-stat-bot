const prettyMilliseconds = require('pretty-ms');

module.exports = {
    name: 'sus',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
     let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
     if(message.author.id === member.id) return message.channel.send("You cannot sus vote yourself!")
     let susUser1 = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
     if(susUser1.sustime == null || config.suscool - (Date.now() - susUser1.sustime) < "0"){
     let susUser = await User.findOne({ guildID: message.guild.id, userID: member.id });
     if(!susUser) return message.channel.send("Error")
     if(!susUser1) return message.channel.send("Error")
     message.channel.send(`<@${message.author.id}> sus voted ${member} with **${susUser1.impact}** Impact`)
     susUser.susvote += susUser1.impact;
     var neededvotes = susUser.impact * 50 ;
     if(susUser.susvote >= neededvotes){
       var level12 = susUser.impact + 1;
       message.channel.send(`<@${member.id}> Congratulations! Your Impact is **${level12}** now!`)
       susUser.impact+=1
     }
     susUser.save();
     susUser1.sustime = Date.now()
     susUser1.save();

     
     } else {return message.channel.send(`You have **${prettyMilliseconds(config.suscool - (Date.now() - susUser1.sustime), {secondsDecimalDigits: 0})}** until you can Vote again!`)}

    }
  }
  