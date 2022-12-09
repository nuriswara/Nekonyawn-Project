//BOT Online
const aoijs = require("aoi.js");
const bot = new aoijs.AoiClient({
  token:process.env.Token,
  prefix: "!",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  mobilePlatform: true,
});

//BOT online

bot.onMessage();


//tester command
//const fs = require("fs");
//const commands = new aoijs.AoiClient();






//Command Example (ping) Nuriswara
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/");