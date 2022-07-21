//here the event starts
const settings = require(`${process.cwd()}/botconfig/settings.json`);
module.exports = (client, info) => {
  if (!settings[`debug-discordjs-logs`]) return;
  console.log(String(info).grey);
}
/**
 * @INFO
 * Bot Coded by Radiant#1106 | https://discord.cyberneticsdev.tk
 * @INFO
 * Work for Cybernetics Development | https://cyberneticsdev.tk
 * @INFO
 * Please mention him / Cybernetics Development, when using this Code!
 * @INFO
 */
