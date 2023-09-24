module.exports = {
    name: 'dbrole',
    description: '',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
    let autho = await message.guild.members.fetch(message.author)
    if (!autho.roles.cache.has('923061811782234163')) return    
    let name1 = bot.users.cache.get(args[0])
    if(!name1) return message.channel.send("User does not exist!")
    let member1 = await message.guild.members.fetch(args[0]);
    let remo = member1.guild.roles.cache.get(args[1]); 
    if(!remo) return message.channel.send("Role not found!")
    let roles = await Roles.findOne({ guildID: message.guild.id, userID: args[0], roleID: args[1] }); 
    if(!roles){Roles.create({ guildID: message.guild.id, userID: args[0], roleID: args[1] });  message.channel.send(`Document created!\nroleID: ${args[1]}\nuserID: ${args[0]}`)}
    message.channel.send("Document exists!")
    



       
       
        
      
    }
  }
  