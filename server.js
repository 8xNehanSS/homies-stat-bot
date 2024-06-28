global.Discord = require("discord.js");
global.mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const ms = require("ms");
var prettySeconds = require("pretty-seconds");
const config = require("./config.json");
const fs = require("fs");
var ordinal = require("ordinal");
const bot = new Discord.Client({
  intents: 32767,
});
bot.commands = new Discord.Collection();
global.Guild = require("./data/guild.js");
global.User = require("./data/user.js");
global.Roles = require("./data/roles.js");
global.Afk = require("./data/afkusers.js");
global.Warn = require("./data/warns.js");
global.Mutes = require("./data/mutes.js");

mongoose.connect(process.env.dataURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});

fs.readdirSync("./commands").forEach((module) => {
  const commandFiles = fs
    .readdirSync(`./commands/${module}/`)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${module}/${file}`);
    command.category = module;
    bot.commands.set(command.name, command);
  }
});

//functions
const path = require("path");
const functionsDir = path.resolve(__dirname, "functions");
console.log(functionsDir);
const files = fs.readdirSync(functionsDir);
const allFunctions = {};
files
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    const filePath = path.join(functionsDir, file);
    const fileExports = require(filePath);
    if (typeof fileExports === "function") {
      allFunctions[path.basename(file, ".js")] = fileExports;
    } else {
      Object.assign(allFunctions, fileExports);
    }
  });

bot.on("ready", () => {
  allFunctions.onReady(bot, Guild);
  allFunctions.botStatusUpdate(bot, Guild);
  allFunctions.updateLeaderboards(bot, Discord, User, prettySeconds, config);
  allFunctions.topRoleReset(bot, User);

  //voice tracking
  const channelIds = [
    "923061879289577522",
    "923061873606266960",
    "923061875682459660",
    "923061888865169438",
    "923061890731606057",
    "923061893827022858",
    "923061897211826206",
    "923061899749388318",
    "923061901833953281",
    "924142589618323467",
    "924142644949565490",
    "964818317212803102",
    "964818320622776340",
    "984451441211109416",
    "984451524568694784",
    "984451789216706560",
  ];
  for (const channelId of channelIds) {
    allFunctions.createVoiceChannelInterval(
      bot,
      "922927891765948517",
      channelId,
      4000
    );
  }

  //reminders
  const reminders = ["Use `.pic` to get picture permissions!"];
  allFunctions.createReminderInterval(reminders);
});
bot.on("guildMemberAdd", (member) =>
  allFunctions.guildMemberAdd(member, Discord, ordinal)
);
bot.on("guildMemberRemove", (member) =>
  allFunctions.guildMemberRemove(member, User)
);

bot.on("messageCreate", (message) => {
  allFunctions.messageCreate(message, bot, config, Discord, User, Guild);
  allFunctions.secondaryMessageCreate(message, bot, User, Mutes, Discord);
  allFunctions.afkCommands(message, Afk, ms);
});

bot.login(process.env.token);

const process1 = require("process");

const logFilePath = "error.log";

process1.on("uncaughtException", (err, origin) => {
  const timestamp = new Date().toISOString();
  const stackTrace = err.stack || "";

  const logMessage =
    `Timestamp: ${timestamp}\n` +
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}\n` +
    `Stack trace:\n${stackTrace}\n\n`;
  const logFileLines = fs.readFileSync(logFilePath, "utf8").split("\n");

  if (logFileLines.length > 300) {
    fs.writeFileSync(logFilePath, "");
  }
  bot.channels
    .fetch("923061932272017449")
    .then((channel) => channel.send(`\`${logMessage}Saved to error_log.txt\``));
  fs.writeFileSync(logFilePath, logMessage, { flag: "a" });
});
