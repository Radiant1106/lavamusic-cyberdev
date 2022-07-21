const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `restart`,
  category: `🎶 Music`,
  aliases: [`replay`],
  description: `Restarts the current song`,
  usage: `restart`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "song",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //seek to 0
    player.seek(0);
    //send informational message
    message.react(emoji.react.replay_track).catch(() => {})
  }
};
/**
 * @INFO
 * Bot Coded by Radiant#1106 | https://github.com/Radiant1106/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Cybernetics Development | https://cyberneticsdev.tk
 * @INFO
 * Please mention Him / Cybernetics Development, when using this Code!
 * @INFO
 */
