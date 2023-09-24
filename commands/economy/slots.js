const ms = require('ms');

const slotItems = ["🍑", "🍒", "🍌", "🍍"];

const slots_rewards = [
    {
            "roll": ["🍑", "🍑", "🍑"],
            "multiplier": 5
        }, 

        {
            "roll": ["🍒", "🍒", "🍒"],
            "multiplier": 4.8
        },

        {
            "roll": ["🍌", "🍌", "🍌"],
            "multiplier": 4.6
        },

        {
            "roll": ["🍍", "🍍", "🍍"],
            "multiplier": 4.4
        },

        {
            "roll": ["🍑", "🍑", "🍒"],
            "multiplier": 4
        },

        {
            "roll": ["🍑", "🍑", "🍌"],
            "multiplier": 3.8
        },

        {
            "roll" : ["🍑", "🍑", "🍍"],
            "multiplier": 3.6
        },

        {
            "roll" : ["🍒", "🍒", "🍑"],
            "multiplier": 3.4
        },

        {
            "roll" : ["🍒", "🍒", "🍌"],
            "multiplier": 3.2
        },

        {
            "roll" : ["🍒", "🍒", "🍍"],
            "multiplier": 3
        },

        {
            "roll" : ["🍌", "🍌", "🍑"],
            "multiplier": 2.8
        },

        {
            "roll" : ["🍌", "🍌", "🍒"],
            "multiplier": 2.6
        },

        {
            "roll" : ["🍌", "🍌", "🍍"],
            "multiplier": 2.4
        },

        {
            "roll" : ["🍍", "🍍", "🍑"],
            "multiplier": 2.2
        },

        {
            "roll" : ["🍍", "🍍", "🍒"],
            "multiplier": 2
        },

        {
            "roll" : ["🍍", "🍍", "🍌"],
            "multiplier": 1.8
        }
    // ... (other rewards)
];

module.exports = {
    name: 'slots',
    description: 'Slots',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        if (message.channel.id === "923061898281369650" || message.channel.id === "940880842761338930") {
            message.delete();
            return message.channel.send("Use this command in bots").then(msg => {
                setTimeout(() => msg.delete(), 5000);
            }).catch();
        }

        if (args[0] != null) {
            let getbal = args[0].replace(/k/g, '000').replace(/K/g, '000');
            if (!isNaN(getbal)) {
                if (getbal <= 50) {
                    return message.channel.send("You cannot use slots with less than **50** points");
                } else {
                    let author = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
                    if (author.money < getbal) {
                        return message.channel.send("You don't have that many points.");
                    } else {
                        var theFood1 = slotItems[Math.floor(Math.random() * slotItems.length)];
                        var theFood2 = slotItems[Math.floor(Math.random() * slotItems.length)];
                        var theFood3 = slotItems[Math.floor(Math.random() * slotItems.length)];

                        var roll = [theFood1, theFood2, theFood3];
                        var foundRoll = slots_rewards.find(reward => JSON.stringify(reward.roll) === JSON.stringify(roll));

                        if (foundRoll) {
                            var multiplier = foundRoll.multiplier;
                            var slotmoney = getbal * multiplier;
                            let embed = new Discord.MessageEmbed()
                                .setColor(config.color).setTitle(`${theFood1}  ${theFood2}  ${theFood3}`)
                                .setDescription(`**${message.author.username}** won **${slotmoney.toLocaleString()}** points`).setFooter(`${multiplier}x Reward`);
                            author.money += Math.floor(parseInt(slotmoney));
                            author.save();

                            const embed1 = new Discord.MessageEmbed()
                                .setColor(config.color).setTitle(`🎰  🎰  🎰`)
                                .setDescription(`**${message.author.username}** runs the slots machine!`).setFooter(`${multiplier}x Reward`);

                            message.channel.send({ embeds: [embed1] }).then((msg) => {
                                setTimeout(function () {
                                    msg.edit({ embeds: [embed] });
                                }, 1000);
                            });
                        } else {
                            var slotmoneylo = getbal * 1;
                            let embed = new Discord.MessageEmbed()
                                .setColor(config.color).setTitle(`${theFood1}  ${theFood2}  ${theFood3}`)
                                .setDescription(`**${message.author.username}** lost **${slotmoneylo.toLocaleString()}** points`).setFooter(`0x Reward`);
                            author.money -= Math.floor(parseInt(getbal));
                            author.save();

                            const embed1 = new Discord.MessageEmbed()
                                .setColor(config.color).setTitle(`🎰  🎰  🎰`)
                                .setDescription(`**${message.author.username}** runs the slots machine!`).setFooter(`0x Reward`);

                            message.channel.send({ embeds: [embed1] }).then((msg) => {
                                setTimeout(function () {
                                    msg.edit({ embeds: [embed] });
                                }, 1000);
                            });
                        }
                    }
                }
            } else {
                return message.channel.send("Please enter a correct value.");
            }
        } else {
            return message.channel.send("Indicate the number of points.");
        }
    }
};
