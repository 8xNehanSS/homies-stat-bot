module.exports = {
    name: 'ar',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
    let member = await message.guild.members.fetch(message.mentions.users.first())
    if(!member) return message.channel.send("Mention a user to give the role!")
    let role1 = message.guild.roles.cache.find(role => role.name === `${args[1]}`)
    if(!role1) return message.channel.send("Error! Role not found")
    let data = await Roles.findOne({ guildID: message.guild.id, roleID: role1.id });
    if(!data) return message.channel.send("Permission Denied")
    if(data.userID != message.author.id) return message.channel.send("Only the role owner can add this role")

    member.roles.add(role1)
    message.channel.send(`Successfully gave the role: ${role1.name}`)
    
     
    }
  }
  