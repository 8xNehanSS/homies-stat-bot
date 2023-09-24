var ordinal = require('ordinal');
const canvacord = require("canvacord");
module.exports = {
    name: 'level',
    description: '',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    let member1 = message.mentions.users.first() || message.author
    let member = await message.guild.members.fetch(message.mentions.users.first() || message.author)
    const member2 = member1.id;
    let guild = await Guild.findOne({ guildID: message.guild.id })
    User.find({ guildID: message.guild.id }).sort([['level','descending']]).exec((err,res) => {
        var rankss =  res.length;
        for(i = 0; i < res.length; i++){
            if(res[i].userID === member2){
                const rank1 = i + 1;
    
                const img = member.user.displayAvatarURL({ format: "jpg" })
                const neededxp = res[i].level * 150 ;
                const rank = new canvacord.Rank()
                
                   .setAvatar(img)
                   .setCurrentXP(res[i].xp)
                   .setBackground("COLOR", "#262626")
                   .setRank(rank1).renderEmojis(true)
                   .setLevel(res[i].level)
                   .setRequiredXP(neededxp)
                   .setProgressBar("#FFA500", "COLOR")
                   .setUsername(member.user.username)
             
                   

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send({content: '**Message Level/Rank**', files: [attachment] });
    });
            }
        }
        
            
        });



    }
}
