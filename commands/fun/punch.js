const fetch = require('node-fetch')
module.exports = {
    name: 'punch',
    description: 'punches user',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
     let user = message.mentions.users.first()
     
    
     if (user === undefined ) {
     return; // Do not proceed, there is no user.
       }
        else {
            const Responses1 = [
                "https://c.tenor.com/EfhPfbG0hnMAAAAC/slap-handa-seishuu.gif",
                "https://c.tenor.com/SwMgGqBirvcAAAAC/saki-saki-kanojo-mo-kanojo.gif",
                "https://c.tenor.com/BoYBoopIkBcAAAAC/anime-smash.gif",
                "https://c.tenor.com/DKMb2QPU7aYAAAAC/rin243109-blue-exorcist.gif",
                "https://c.tenor.com/Y8_ITfFMQmMAAAAC/yue-arifureta.gif"
            ];
            const Response1 = Math.floor(Math.random() * Responses1.length);
                 
       const exampleEmbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setImage(`${Responses1[Response1]}`)
   .setTimestamp();
message.channel.send({ content: `<@${message.author.id}> punched <@${user.id}>`, embeds: [exampleEmbed] })

}
       
       
        
      
    }
  }
  