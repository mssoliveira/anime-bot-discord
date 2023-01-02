/**
 * O evento guildMemberRemove é emitido após um membro sair do servidor.
 */

module.exports = (client, member) => {
  const Discord = require('discord.js');

  const leave = new Discord.MessageEmbed()
    .setColor(process.env.COLOR)
    .setAuthor('👥 Um membro saiu do servidor.')
    .setThumbnail(
      `${member.user.displayAvatarURL({ dynamic: true })}?size=1024`
    )
    .setDescription(`${member} acabou de sair.`)
    .setFooter(process.env.COPY_TEXT, process.env.COPY_IMAGE)
    .setTimestamp();

  member.guild.channels.cache.get(process.env.SAIDA).send(leave);
};
