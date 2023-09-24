module.exports = {
    name: 'ustatus',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

        let guild = await Guild.findOne({ guildID: message.guild.id });
      let autho = await message.guild.members.fetch(message.author)
      if (!autho.roles.cache.has('923061811782234163')) return message.react("⛔")    

     if(!config.type.includes(args[0])) return message.channel.send("Invalid Type")
     if(!config.sign.includes(args[1])) return message.channel.send("Invalid Type")
     const textt = args.slice(2).join(` `);
     if(textt.length >= 30) return message.channel.send("Max 30 characters")
     guild.statustype = args[0];
     guild.sign = args[1];
     guild.status = textt;
     guild.save();
     message.channel.send("Sucessfully updated. Refresh status now")
    

}
}
