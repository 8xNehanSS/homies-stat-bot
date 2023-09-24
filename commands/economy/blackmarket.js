module.exports = {
    name: 'bmarket',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

        if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
            message.delete();
            return message.channel.send("Use this cmd in bots").then(msg => {
              setTimeout(() => msg.delete(), 5000)
            })
            .catch();}
        
        setTimeout(function() { // Setup a timer
            message.delete(); // Deletes the users message
        }, 800); // 5 seconds in milliseconds
    let embed = new Discord.MessageEmbed()
    .setColor(config.color)
    .setTitle(`Black Market`).setThumbnail("https://cdn.discordapp.com/attachments/929649823953600522/982340706976821318/anonymous_mask_PNG23.png")
    .setDescription(`Not the Blackmarket!\n\n[1] Sus Down Vote - **250k** Points\n・\n・\n\nUse _.blbuy [item number]_ to purchase\nEg: .blbuy 2`)
    message.channel.send({ embeds: [embed] }).then(msg => {
        setTimeout(() => msg.delete(), 20000)
      })
      .catch()
    }
}
