module.exports = {
    name: 'myrole',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    
    let role1 = message.guild.roles.cache.find(role => role.name === `${args[0]}`)
    if(!role1) return message.channel.send("Error! Role not found")
    let data = await Roles.findOne({ guildID: message.guild.id, roleID: role1.id });
    if(!data) return message.channel.send("Permission Denied")
    if(data.userID != message.author.id) return message.channel.send("Only the role owner can use this cmd")
    const data11 = message.guild.roles.cache.get(data.roleID).members.map(m=>m.user.tag).join('\n')
    const ListEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Users with **${role1.name}** role\n\n${data11}`);
        message.channel.send({ embeds: [ListEmbed] }); 
    
     
    }
  }
  