const {
  MessageEmbed,
  MessageButton,
  MessageActionRow
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  handlemsg
} = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "invite",
  category: "🔰 Info",
  aliases: ["add"],
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let user = message.mentions.users.first() || client.user;
    if (user) {
      if (!user.bot) return interaction.reply({
        ephemeral: true,
        content: "<:denied:976057873878630400> You can't Invite a Normal user! **IT MUST BE A BOT**"
      })
      let button_public_invite = new MessageButton().setStyle('LINK').setLabel(handlemsg(client.la[ls].cmds.info.invite.buttons.public)).setURL("https://discord.com/api/oauth2/authorize?client_id=954403088809197628&permissions=8&scope=bot%20applications.commands")
      let button_support_dc = new MessageButton().setStyle('LINK').setLabel(handlemsg(client.la[ls].cmds.info.invite.buttons.server)).setURL("https://discord.cyberneticsdev.tk")
      let button_invite = new MessageButton().setStyle('LINK').setLabel("Invite " + user.username).setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
      //array of all buttons
      const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
      message.reply({
        embeds: [new MessageEmbed()
          .setColor(ee.color)
          .setTitle(`Invite: __**${user.tag}**__`)
          .setDescription(`||[*Click here for an Invitelink without Slash Commands*](https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot)||`)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
          .setFooter(client.getFooter(`${user.username} | powered by cyberneticsdev.tk`, "https://imgur.com/jPItIw0.gif"))
        ],
        components: allbuttons
      });
    }
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
