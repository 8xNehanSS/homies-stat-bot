const ms = require('ms');
const prettyMilliseconds = require('pretty-ms');


module.exports = {
    name: 'work',
    description: 'work for points',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

      if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
        message.delete();
        return message.channel.send("Use this cmd in bots").then(msg => {
          setTimeout(() => msg.delete(), 5000)
        })
        .catch();}

      let data = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
      
      if(data._time2 == null || config.timely2 - (Date.now() - data._time2) < "0") {
      const worked = data.level * 70;
      message.channel.send(`You worked for **${worked.toLocaleString()}** points`);
      data._time2 = Date.now(); data.money += parseInt(worked); data.save() } else {return message.channel.send(`You have **${prettyMilliseconds(config.timely2 - (Date.now() - data._time2), {secondsDecimalDigits: 0})}** until you can work again!`)}
  }
}
