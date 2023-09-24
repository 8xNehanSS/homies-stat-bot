
module.exports = {
    name: 'userinfo',
    description: 'get user information',
    aliases: [],
    public: true,
    async execute(bot, message, args) {
        let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
        const nick = member.nickname || `None`
        const cread = member.user.createdTimestamp
        let strFirstThree = cread.toString().slice(0 , 10)
        const joonn = member.joinedTimestamp
        let joooined = joonn.toString().slice(0 , 10)
        const rolee = member.roles.cache.map(r => `${r}`).join(' ').slice(0,-9) || `None`
        const embed = new Discord.MessageEmbed()
        .setDescription(`${member}`)
        .setColor("RANDOM")
        .setThumbnail(`${member.user.displayAvatarURL()}`)
        .addFields(
            { name: 'ID', value: `${member.user.id}`, inline: true },
            { name: 'Nickname', value: `${nick}`, inline: true  },
            { name: 'Created date', value: `<t:${strFirstThree}> (<t:${strFirstThree}:R>)`},
            { name: 'Joined at', value: `<t:${joooined}> (<t:${joooined}:R>)`, inline: true },
        )
        .addField('Roles', `${rolee}`)
        .setFooter("User Information")
        
       

        message.channel.send({ embeds: [embed] });
        
    }
}