module.exports = {
    name: 'ehelp',
    description: 'economy help',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
        const mess = '**__Economy Help__**\n\n' +
    ' **.eguide**: Economy guide and FAQ\n' +
    ' **.p**: Check your or mention @user\'s points\n' +
    ' **.v**: Check your or mention @user\'s vault points\n' +
    ' **.plb**: Points leaderboard\n' +
    ' **.vlb**: Vault points leaderboard\n' +
    ' **.beg**: Beg for points\n' +
    ' **.gamble [value]**: Gamble points\n' +
    ' **.slots [value]**: Use slot machine\n' +
    ' **.give [@user] [value]**: Give points to mentioned user\n' +
    ' **.work**: Work and earn points every 4h\n' +
    ' **.daily**: Get daily point bonus every 24h\n' +
    ' **.deposit [value || all]**: Deposit points into vault\n' +
    ' **.with [value || all]**: Withdraw points from vault\n' +
    ' **.steal [@user]**: Steal points from user\n' +
    ' **.bmarket**: Open the black market\n' +
    ' **.net**: Get the net worth of server\n\n' +
    '**__Store Commands__**\n' +
    ' **.store**: Open the server roles store\n' +
    ' **.buy [number]**: Buy the corresponding Role number';
        
        let pf = new Discord.MessageEmbed()
        .setTitle(`LK Homies - Economy Help`).setColor(config.color)
        .setDescription(mess)
        .setThumbnail(`https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png`)
        if(message.channel.id === "923061914643349534") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061915532554240") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061917176692787") return message.channel.send({ embeds: [pf] });
        if(message.channel.id === "923061889766940672") return message.channel.send({ embeds: [pf] });
        message.reply("Use this command in bots");
      
  }
}
