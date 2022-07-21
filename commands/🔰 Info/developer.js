const {
  MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  MessageButton,
  MessageActionRow
} = require('discord.js')
const {
  handlemsg
} = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "developer",
  category: "🔰 Info",
  aliases: ["dev", "Radiant"],
  description: "Shows Information about the Developer",
  usage: "developer",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.invite).setURL("https://discord.com/api/oauth2/authorize?client_id=954403088809197628&permissions=8&scope=bot%20applications.commands")
    let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.dc).setURL("https://discord.cyberneticsdev.tk")
    let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.botlist).setURL(`https://botlist.cyberneticsdev.tk`)
    const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(es.color)
        .setFooter(es.footertext + " | Sponsor: Bittmax.de | Code  'x10'  == -5%", es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL())
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/avatars/552060563602276362/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
        .setTitle(client.la[ls].cmds.info.developer.title)
        .setURL("https://cyberneticsdev.tk")
        .setDescription(client.la[ls].cmds.info.developer.description)
      ],
      components: allbuttons
    }).catch(error => console.log(error));

  }
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
