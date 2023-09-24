module.exports = {
    name: 'blbuy',
    description: 'Buy items from market',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

      if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
        message.delete();
        return message.channel.send("Use this cmd in bots").then(msg => {
          setTimeout(() => msg.delete(), 5000)
        })
        .catch();}

        setTimeout(function() { // Setup a timer
            message.delete(); // Deletes the users message
        }, 800); // 5 seconds in milliseconds
    let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
            
    if(args[0] != null){

    if(args[0] === "1") {if(author.money < "250000") return message.channel.send(`You don't have enough points.`).then(msg => {
        setTimeout(() => msg.delete(), 4000)
      })
      .catch()
    author.money -= Math.floor(parseInt("250000"));
    author.susvote -= 1;
    author.save();
    message.channel.send(`Package Delivered!`).then(msg => {
        setTimeout(() => msg.delete(), 4000)
      })
      .catch()}

    
} else {message.channel.send("Enter item number!").then(msg => {
    setTimeout(() => msg.delete(), 4000)
  })
  .catch() }
}}

