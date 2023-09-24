const fs = require('fs');
module.exports = {
    name: 'errorlog',
    description: '',
    aliases: [],
    public: false,
    async execute(bot, message, args, config) {
    
     const logFilePath = './error_log.txt';
     const logContent = fs.readFileSync(logFilePath, 'utf8');
        
     let member = message.author.id
     if(member != "564436985071271956") return;
     message.channel.send({
          content: 'Here is the error log:',
          files: [{ attachment: Buffer.from(logContent), name: 'error_log.txt' }],
        });
     fs.writeFileSync(logFilePath, ' ');
    }
  }