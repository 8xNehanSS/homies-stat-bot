const fetch = require('node-fetch')
module.exports = {
    name: 'hug',
    description: 'hugs user',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
     let user = message.mentions.users.first()
     
    
     if (user === undefined ) {
     return; // Do not proceed, there is no user.
       }
        else {
          const response = await fetch("http://api.nekos.fun:8080/api/hug");
                 const data = await response.json();
                 
                 var gif = data.image;
                 
       const exampleEmbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setImage(`${gif}`)
   .setTimestamp();
message.channel.send({ content: `<@${message.author.id}> hugged <@${user.id}>`, embeds: [exampleEmbed] })

}
       
       
        
      
    }
  }
  