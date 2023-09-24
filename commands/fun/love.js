module.exports = {
    name: 'love',
    description: 'check love',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

        if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
            message.delete();
            return message.channel.send("Use this cmd in bots").then(msg => {
              setTimeout(() => msg.delete(), 5000)
            })
            .catch();}
            
        let member = await message.guild.members.fetch(message.mentions.users.first())
        let member1 = await message.guild.members.fetch(message.mentions.users.last())
        if(member === null) return message.reply("Mention two users")
        let mem = message.mentions.users.first().id
        let mem1 = message.mentions.users.last().id
        if(mem === mem1) return message.reply("Mention two users")
        const loveper =  Math.floor(Math.random() * 95) + 5;
        let embed = new Discord.MessageEmbed()
        .setTitle("Love percentage").setColor("RANDOM")
        .setDescription(`${member} & ${member1} is **${loveper}%** in love!`)
        .setFooter("Fun - Homies")
        message.channel.send({ embeds: [embed] })
    }
}
