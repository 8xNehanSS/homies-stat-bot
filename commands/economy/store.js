module.exports = {
    name: 'store',
    description: 'open up server store',
    aliases: ["shop"],
    public: true,
    async execute(bot, message, args, config) {

        if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
            message.delete();
            return message.channel.send("Use this cmd in bots").then(msg => {
              setTimeout(() => msg.delete(), 5000)
            })
            .catch();}


    let embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`Homies - Store`).setThumbnail("https://cdn.discordapp.com/attachments/861614593444937739/958954846340382730/output-onlinepngtools.png")
    .setDescription(`Welcome to the Store! Here you can use your points to buy items/roles. Roles will be added instantly as u purchase.\nDM staff if you need any support.\nInorder to buy roles you require previous role. ie; Peasants to Lower Class\n\n[1] Peasants - **100** points\n[2] Lower Class - **1,000** points\n[3] Middle Class - **10,000** points\n[4] Upper Class - **15,000** points\n[5] Wealthy - **30,000** points\n[6] Super Wealthy - **50,000** points\n[7] Royalty - **100,000** points\n[8] Millionaires - **1,000,000** points\n[9] Multi Millionaires - **5,000,000** points\n[10] Custom command - **300,000** points (Bot replies with your message, message should not be inappropriate; Max 3 Commands)\n[11] Vote Time Reset - **25,000** points\n[12] Custom Pic/Gif Command - **600,000** points (Bot replies with the pic/gif)\n・\n・\n\nUse _.buy [item number]_ to purchase\nEg: .buy 2`)
    message.channel.send({ embeds: [embed] });
    }
}
