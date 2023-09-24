module.exports = {
    name: 'help',
    description: 'help command',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
      let pf = new Discord.MessageEmbed()
      .setAuthor("LK Homies", bot.user.displayAvatarURL())
      .setTitle(`**Bot Commands**`).setColor(config.color).setTimestamp()
      .setDescription(`__**Utilities**__\n**.av**  **.userinfo**  **.join**\n\n**__Fun Commands__**\n**.sus [@user]** - Vote @user as sus\n**.vsus** - Check your sus votes\n**.suslb** - Sus Leaderboard\n**.kiss [@user]  .hug [@user] .lick [@user]** \n**.punch [@user]  .spit [@user]  .pat [@user]  .cuddle [@user]**\n**.rose [@user]  .slap [@user]**\n**.coinflip**  **.advice**  **.8ball [question]**\n**.love [@user1] [@user2]**  **.roll**  **.topic**  **.vote**\n\n**__Economy__**\n**.ehelp**  **.eguide**\n\n**__Server Activity__**\nRanks => **.m**  **.mm**  **.n**  **.nn**\n**.ms** - Get your or @user's message activity statistics\n**.vs** - Get your or @user's voice activity statistics\n**.level** - Messages level and rank\n**.vlevel** - Voice level and rank\n**.alb** - Alltime messages leaderboard\n**.wlb** - Weekly messages leaderboard\n**.vcs** - Alltime voice leaderboard\n**.vcw** - Weekly voice leaderboard\n**.top** - Messages level leaderboard\n**.topvc** - Voice level leaderboard`)
      .setThumbnail(`https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png`)

        if(message.channel.id === "923061914643349534") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061915532554240") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061917176692787") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061889766940672") return message.channel.send({ embeds: [pf] });
        message.channel.send("Use this command in bots");
      
  }
}
