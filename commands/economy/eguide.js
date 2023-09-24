module.exports = {
    name: 'eguide',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        let pf = new Discord.MessageEmbed()
        .setTitle(`LK Homies - Economy Guide`).setColor(config.color)
        .setDescription(`**WHAT ARE POINTS?**\nPoints are LK Homies currency system.\n\n**WHAT CAN I USE POINTS FOR?**\nYou can use points to gamble, show off your wealth, and purchase items from the store. To view the store, do .store.\n\n**HOW DO I EARN POINTS?**\nThere are several ways to earn points. You can get points through message milestones, gambling, getting on the activity leaderboard, as well as several other methods.`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png`)
        if(message.channel.id === "923061914643349534") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061915532554240") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061917176692787") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061889766940672") return message.channel.send({ embeds: [pf] });
        message.reply("Use this command in bots");
      
  }
}
