const fetch = require('node-fetch')
module.exports = {
    name: 'spit',
    description: 'spits on user',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
     let user = message.mentions.users.first()
     
    
     if (user === undefined ) {
     return; // Do not proceed, there is no user.
       }
        else {
            const Responses1 = [
                "https://c.tenor.com/i1eM2uaS9BoAAAAC/tea-blushing.gif",
                "https://c.tenor.com/5s7LvtsHO9MAAAAC/toradora-anime.gif",
                "https://c.tenor.com/XsjLSx_TLS0AAAAC/drinking-shocked.gif"
            ];
            const Response1 = Math.floor(Math.random() * Responses1.length);
                 
       const exampleEmbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setImage(`${Responses1[Response1]}`)
   .setTimestamp();
message.channel.send({ content: `<@${message.author.id}> spat on <@${user.id}>`, embeds: [exampleEmbed] })

}
       
       
        
      
    }
  }
  