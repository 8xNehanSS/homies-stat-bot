const fetch = require('node-fetch')
module.exports = {
    name: '8ball',
    description: '8ball answers',
    aliases: ["8b"],
    public: true,
    async execute(bot, message, args) {
        const question = args.join(" ")
        if (!question) return message.channel.send(`Ask me a question!`) 
        const response = await fetch(`https://eightballapi.com/api?question=${question}&lucky=false`);
                  const data = await response.json();
                  var randomquestion = data.reading;
                  const embed = new Discord.MessageEmbed()
        .setAuthor("8Ball", "https://thumbs.dreamstime.com/b/8ball-billiards-pool-ball-14003644.jpg")
        .setColor("RANDOM")
        .setDescription(`<@${message.author.id}>, ${randomquestion}`)
        .setFooter("8ball - Homies")
        
       

        message.channel.send({ embeds: [embed] });
        
    }
}