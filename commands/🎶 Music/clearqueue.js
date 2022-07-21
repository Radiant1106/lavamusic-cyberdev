const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `clearqueue`,
  category: `🎶 Music`,
  aliases: [`clearqu`],
  description: `Cleares the Queue`,
  usage: `clearqueue`,
  cooldown: 10,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "queue",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //clear the QUEUE
    player.queue.clear();
    //React with emojis
    message.react(emoji.react.queue_clear).catch(() => {})
    //Send Success Message
    return message.reply({
      embeds: [new MessageEmbed()
        .setTitle(client.la[ls].cmds.music.clearqueue.title)
        .setColor(es.color)
      ]
    });
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
