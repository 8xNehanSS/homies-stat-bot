var ordinal = require('ordinal');
module.exports = {
    name: 'addweekvcpoints',
    description: 'add weeklypoints in server',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
    if(message.channel.id != "923061932272017449") return
    let guild = await Guild.findOne({ guildID: message.guild.id })
    User.find({ guildID: message.guild.id }).sort([['vcweek','descending']]).exec(async(err,res) => {
        for(i = 0; i < 19; i++){
            if(i === 0){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 100000;
                data.save();
            
            }
            if(i === 1){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 50000;
                data.save();
            
            }
            if(i === 2){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 25000;
                data.save();
            
            }
            if(i === 3){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 15000;
                data.save();
            
            } 
            if(i === 4){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 10000;
                data.save();
            
            }
            if(i >= 5){
                var name = res[i].userID
                if (!name) return;
                let data = await User.findOne({ guildID: message.guild.id, userID: name });
                data.money += 5000;
                data.save();
            
            }
        }
        
            message.channel.send(`**Weekly VC Points Added**`)
        });
    }
}
