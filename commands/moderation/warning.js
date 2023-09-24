module.exports = {
    name: 'warn',
    description: '',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
    
    let autho = await message.guild.members.fetch(message.author)
    if (!autho.roles.cache.has('923061813006975056')) return message.channel.send("Permission Denied")  
    if(!args[0]) return message.channel.send("Use the format **.warn @user [reason]**")
    let member1 = await message.guild.members.fetch(message.mentions.users.first())
    if (member1.roles.cache.has('923061813006975056')) return message.channel.send("Permission Denied") 
    if(!member1) return message.channel.send(`User was not found.`)
     
    if(member1.user.bot) return message.channel.send(`Bots are not humans.`)
    
    if(!args[1]) return message.channel.send("Mention a reason") 
    
    var d22 = new Date();
console.log(d22.toLocaleTimeString());
console.log(d22.toLocaleString());
console.log(d22.toLocaleDateString());

    var deete = new Date().toLocaleDateString();
    warnedbyy = message.author.id;
    reason = args.slice(1).join(` `)
    target = member1.user.id;
    const obj = {
        Warnedby: message.author.id,
        WarnedDate: deete,
        Reason: reason
    }

    let data = await Warn.findOne({ guildID: message.guild.id, userID: target });
    if(!data){Warn.create({ 
        guildID: message.guild.id, 
        userID: member1.user.id,
        Content: [{
            Warnedby: message.author.id,
            WarnedDate: deete,
            Reason: reason
        }]
      });
    return bot.channels.fetch('923061929164025856').then(channel => channel.send(`**${autho.user.username}** warned **${member1.user.username}** for \`${reason}\``)).then(message.channel.send(`Warned <@${target}> for \`${reason}\``))
}

data.Content.push(obj);
data.save();
return bot.channels.fetch('923061929164025856').then(channel => channel.send(`**${autho.user.username}** warned **${member1.user.username}** for \`${reason}\``)).then(message.channel.send(`Warned <@${target}> for \`${reason}\``))


}
}
