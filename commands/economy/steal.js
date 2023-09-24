const ms = require('ms');
const prettyMilliseconds = require('pretty-ms');
module.exports = {
    name: 'steal',
    description: 'Steal points from another user',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {

      if(message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930"){
        message.delete();
        return message.channel.send("Use this cmd in bots").then(msg => {
          setTimeout(() => msg.delete(), 5000)
        })
        .catch();}
    
    if(!args[0]) return message.channel.send("Use the format **.steal @user**")
    let member = await message.guild.members.fetch(message.mentions.users.first())
    if(!member) return message.channel.send(`User was not found.`)

    let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
    let loc = await User.findOne({ guildID: message.guild.id, userID: member.id });
    if(author._time3 == null || author.messages - author._time3 >= "50") { 
    if(!loc) return bot.nodb(member.user)
    const winlose = Math.floor(Math.random() * 100) + 1;
    if(winlose <= 70){
    if(loc.money < 5000) return message.channel.send(`Robbing failed. They were broke`)
    if(author.userID == member.id) return message.channel.send(`You cannot steal points from yourself! Dumb!`)
    if(member.user.bot) return message.channel.send(`Bots are not humans.`)
    const moneyhas =  loc.money;
    const stealperc = Math.floor(Math.random() * 30) + 10;
    const stealval1 = moneyhas * stealperc / 100;
    var stealval = Math.round(stealval1);
    author.money += Math.floor(parseInt(stealval));
    loc.money -= Math.floor(parseInt(stealval));
    const msgamt = author.messages;
    author._time3 = msgamt;
    author.save(); loc.save()
    message.channel.send(`**${message.author} is robbing..**`)
.then((msg)=> {
  setTimeout(function(){
    msg.edit(`**${message.author}** stole **${stealval.toLocaleString()}** points from **${member.user}**`);
  }, 1000)
});} else {
  author.vmoney -= Math.floor(parseInt(200));
  const msgamt = author.messages;
  author._time3 = msgamt;
  author.save();
  message.channel.send(`**${message.author} is robbing..**`)
.then((msg)=> {
setTimeout(function(){
  msg.edit(`You got caught stealing and paid a fine of **200** points from vault`);
}, 1000)
});} 
    
    } else {
      const msgneed = (author._time3 + 50) - author.messages;
      message.channel.send(`Send **${msgneed}** messages in general before stealing again!`)}}
}
