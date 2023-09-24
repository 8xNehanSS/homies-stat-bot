const ms = require('ms');
const prettyMilliseconds = require('pretty-ms');
module.exports = {
    name: 'daily',
    description: 'Daily bonus?',
    aliases: ["bonus"],
    public: true,
    async execute(bot, message, args, config) {

      if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
        message.delete();
        return message.channel.send("Use this cmd in bots").then(msg => {
          setTimeout(() => msg.delete(), 5000)
        })
        .catch();}

      let data = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
      
      if(data._time !== null && config.timely - (Date.now() - data._time) > 0) return message.channel.send(`You have **${prettyMilliseconds(config.timely - (Date.now() - data._time), {secondsDecimalDigits: 0})}** until next bonus!`)
      
      message.channel.send(`You have been given **2000** points`);
      data._time = Date.now(); data.money += parseInt(config.how); data.save() 
  }
}
