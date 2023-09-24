module.exports = {
  name: 'giveaway',
  description: 'giveaways holding',
  aliases: [],
  public: false,
  async execute(bot, message, args, config) {
    let member =await message.guild.members.fetch(message.mentions.users.first() || message.author)
    message.delete();
    let data = await User.findOne({ guildID: message.guild.id, userID: member.user.id });

    if(!data) {bot.nodb(member.user);} else{
      let getbal = args[0].replace(/k/g, '000').replace(/K/g, '000')
      if(!getbal) {message.reply(`Mention the giveaway prize!`);} else {
          if(isNaN(getbal)) {message.reply(`This is not a number.`);} else {
              if(member.user.bot) {message.reply(`Bots aren't awarded`);} else {
                  var addmoney = getbal * 1;
                  let embed = new Discord.MessageEmbed()
                  .setTitle("Congratulations!")
                  .setImage("https://cdn.discordapp.com/attachments/861614593444937739/940471018173124618/giveaway.jpg") 
                  .setColor(config.color)
                   .setDescription(`<@${member.user.id}> won the Giveaway!\n+ You won **${addmoney.toLocaleString()}** points\n+ Exclusive giveaway winner trophy role! `);
                    
                   message.channel.send({ embeds: [embed] })
                   let giv2role = message.guild.roles.cache.get("940973385545031751");
                   member.roles.add(giv2role);
                  data.money += Math.floor(parseInt(getbal)); data.save();

              }
          }

      }

    }
  }
}
