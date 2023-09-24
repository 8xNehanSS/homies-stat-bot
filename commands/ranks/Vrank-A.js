var ordinal = require('ordinal');
module.exports = {
    name: 'n',
    description: 'view weekl message rank',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    let member1 = message.mentions.users.first() || message.author
    const member2 = member1.id;
    let guild = await Guild.findOne({ guildID: message.guild.id })
    User.find({ guildID: message.guild.id }).sort([['vctotal','descending']]).exec((err,res) => {
        let embed = new Discord.MessageEmbed().setTitle("**Alltime Voice Rank**").setColor(config.color).setFooter("Alltime Ranking").setTimestamp()
        var rankss =  res.length;
        for(i = 0; i < res.length; i++){
            if(res[i].userID === member2){
                const rank = i + 1;
                embed.setDescription(`<@${res[i].userID}> is ranked **${ordinal(rank)}** out of **${rankss}** members!`)
            }
        }
        
            message.channel.send({ embeds: [embed] })
        });
    }
}
