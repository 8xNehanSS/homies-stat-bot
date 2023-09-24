module.exports = {
    name: 'rwarn',
    description: '',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
    
    let autho = await message.guild.members.fetch(message.author)
    if (!autho.roles.cache.has('923061813006975056')) return message.channel.send("Permission Denied")  
    if(!args[0]) return message.channel.send("Use the format **.rwarn @user [warnID]**")
    let member1 = await message.guild.members.fetch(message.mentions.users.first())
    
    if(!member1) return message.channel.send(`User was not found.`)
     
    if(member1.user.bot) return message.channel.send(`Bots are not humans.`)

    if(!args[1]){return message.channel.send("Mention a warnID to remove")}

    warniid = args[1];
    warnrem = args[1] - 1;
    
    target = member1.user.id;

    let data = await Warn.findOne({ guildID: message.guild.id, userID: target });
    if(!data){return message.channel.send("User has no warnings")}

    
    data.Content.splice(warnrem, 1)
    data.save();
    
    bot.channels.fetch('923061929164025856').then(channel => channel.send(`**${autho.user.username}** removed a warn from **${member1.user.username}**`))
    message.channel.send(`Warn ID: ${warniid} of <@${target}> removed`)



}}