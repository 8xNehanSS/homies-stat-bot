const fetch = require('node-fetch')
module.exports = {
    name: 'rose',
    description: 'gives  a rose',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        
     let user = message.mentions.users.first()
     
    
     if (user === undefined ) {
     return; // Do not proceed, there is no user.
       }
        else {
            const Responses1 = [
                "https://c.tenor.com/hyFlAh3FsS4AAAAC/hikikomori-rose.gif",
                "https://c.tenor.com/LYIfUMRXVYQAAAAC/anime-rose.gif","https://c.tenor.com/XTOmEA6krVgAAAAC/anime-sad.gif","https://c.tenor.com/A2jAoPIdsXoAAAAC/seductive-anime.gif","https://c.tenor.com/aJwv-KmeALEAAAAC/anime-rose.gif","https://c.tenor.com/6KhdnWZjqTUAAAAC/joker-game-rose.gif"
            ];
            const Response1 = Math.floor(Math.random() * Responses1.length);
                 
       const exampleEmbed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setImage(`${Responses1[Response1]}`)
   .setTimestamp();
message.channel.send({ content: `<@${message.author.id}> gave a rose to <@${user.id}>`, embeds: [exampleEmbed] })

}
       
       
        
      
    }
  }
  