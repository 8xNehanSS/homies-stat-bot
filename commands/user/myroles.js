module.exports = {
    name: 'myroles',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
    let member = await message.guild.members.fetch(message.author)
    Roles.find({ userID: member.user.id }).exec((err,res) => {
        let embed = new Discord.MessageEmbed().setColor(config.color).setTitle(`**Your roles:** \`${member.user.username}\``)
        if(res.length === 0){ embed.setDescription(`You don't own any roles!`) }
        else { if(res.length === 1){
            let name0 = res[0].roleID
            let name1 = "Slot2 Empty"
            let name2 = "Slot3 Empty"
            embed.setDescription(`**1**. <@&${name0}>\n**2**. ${name1}\n**3**. ${name2}`)
        } else {if(res.length === 2) {
            
            let name0 = res[0].roleID
            let name1 = res[1].roleID
            let name2 = "Slot3 Empty"
            embed.setDescription(`**1**. <@&${name0}>\n**2**. <@&${name1}>\n**3**. ${name2}`)
        } else {if(res.length === 3){
            let name0 = res[0].roleID
            let name1 = res[1].roleID
            let name2 = res[2].roleID
            embed.setDescription(`**1**. <@&${name0}>\n**2**. <@&${name1}>\n**3**. <@&${name2}>`)}}}}
            message.channel.send({ embeds: [embed] })
        });
    
     
    }
  }
  