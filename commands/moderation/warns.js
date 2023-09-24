module.exports = {
    name: 'warns',
    description: '',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
    
    let autho = await message.guild.members.fetch(message.author)
    if (!autho.roles.cache.has('923061813006975056')) return message.channel.send("Permission Denied")  
    if(!args[0]) return message.channel.send("Use the format **.warns @user**")
    let member = await message.guild.members.fetch(message.mentions.users.first())
    
    if(!member) return message.channel.send(`User was not found.`)
     
    if(member.user.bot) return message.channel.send(`Bots are not humans.`)
    
    

    target = member.user.id;
    let data = await Warn.findOne({ guildID: message.guild.id, userID: target });
    if(!data){return message.channel.send(`<@${target}> has no warnings`)}
        
    let embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`Warns of the USER`)
    if(!data.Content[0]) return message.channel.send(`<@${target}> has no warnings`)
    data.Content.forEach((w, i) => {
        embed.addField(`**ID**: ${i + 1}`, `**By**: <@${w.Warnedby}>\n**Date**: ${w.WarnedDate}\n**Reason**: ${w.Reason}`, true);
    });
    message.channel.send({ embeds: [embed] });
    console.log(data.Content[0])

    }}