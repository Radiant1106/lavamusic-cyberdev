const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `stop`,
  category: `🎶 Music`,
  aliases: [`leave`, "dis", "disconnect", "votestop", "voteleave", "votedis", "votedisconnect", "vstop", "vleave", "vdis", "vdisconnect"],
  description: `Stops current track and leaves the channel`,
  usage: `stop`,
  parameters: {
    "type": "music",
    "activeplayer": false,
    "check_dj": false,
    "previoussong": false
  },
  type: "song",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //stop playing
    if(player && player.queue) player.destroy();
    else if(message.guild.me.voice.channel) message.guild.me.voice.disconnect().catch(() => {});
    //React with the emoji
    return message.react(emoji.react.stop).catch((e) => {})
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
