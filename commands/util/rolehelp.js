module.exports = {
    name: 'rolehelp',
    description: 'help command',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
      let pf = new Discord.MessageEmbed()
      .setAuthor("LK Homies", bot.user.displayAvatarURL())
      .setTitle(`**Roles Commands**`).setColor(config.color).setTimestamp()
      .setDescription(`If you own a custom role make sure it is registered by asking a Admin. You can give your role to any user you prefer by using commands. Only the role owner is able to use these commands. Max roles you can own is 3.\n\n**.myroles** - Check the roles you own\n**.myrole [role name]** - Check users who has your role\n**.ar [@user] [role name]** - Add the role to mentioned user\n**.arr [@user] [role name]** - Remove role from mentioned user`)
      .setThumbnail(`https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png`)

        if(message.channel.id === "923061914643349534") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061915532554240") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061917176692787") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061889766940672") return message.channel.send({ embeds: [pf] });
        message.channel.send("Use this command in bots");
      
  }
}
