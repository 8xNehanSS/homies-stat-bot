const ms = require('ms');
const prettyMilliseconds = require('pretty-ms');
const os = require('os');
const packageJson = require('../../package.json'); // Adjust the path to your package.json file

module.exports = {
    name: 'ping',
    description: 'View bot latency and status information',
    aliases: [],
    public: true,
    async execute(bot, message, args, config) {
        const uptime = prettyMilliseconds(bot.uptime, { secondsDecimalDigits: 0 });
        const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Memory usage in MB

        const botVersion = packageJson.version || 'Unknown'; // Extract version from package.json
        const nodeVersion = process.version;
        const platform = os.platform();
        const botname = packageJson.name || 'Unknown';

        message.channel.send(`**Client ping:** ${bot.ws.ping | 0}ms\n` +
            `**Uptime:** ${uptime}\n` +
            `**Memory Usage:** ${memoryUsage} MB\n` +
            `**Bot:** ${botname}\n` +
            `**Bot Version:** ${botVersion}\n` +
            `**Node.js Version:** ${nodeVersion}\n` +
            `**Platform:** ${platform}`);
    }
};
