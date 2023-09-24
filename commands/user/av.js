module.exports = {
    name: 'av',
    description: 'avatar of user',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
        let member1 = message.mentions.users.first() || message.author
     
    
     if (member1 === undefined ) return;
    
        const name1 = message.author.nickname || message.author.username
     const avatarrr = member1.displayAvatarURL(({dynamic: true ,  size: 4096})) || "https://cdn.discordapp.com/embed/avatars/0.png"
                 
const exampleEmbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle(`Requested by - ${name1}`)
   .setImage(avatarrr)
   .setTimestamp();
message.channel.send({ embeds: [exampleEmbed] })


       
       
        
      
    }
  }
  