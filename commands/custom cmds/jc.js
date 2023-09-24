module.exports = {
    name: 'jc',
    description: "JC",
    usage: "",
    aliases: [],
    async execute(bot, message, args, config) {
        const msg = "JC better than owner"
        if(message.channel.id === "923061898281369650") return message.channel.send(msg);
        if(message.channel.id === "940880842761338930") return message.channel.send(msg);
        if(message.channel.id === "932243710110990336") return message.channel.send(msg);
        if(message.channel.id === "923061922071478272") return message.channel.send(msg);
        if(message.channel.id === "924141967535923250") return message.channel.send(msg);
        if(message.channel.id === "924545492917039104") return message.channel.send(msg);
        if(message.channel.id === "923061925946982500") return message.channel.send(msg);
    }
}