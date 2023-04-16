const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Useful - Tells the user to get some help'),
  async execute(interaction) {
    const helpEmbed = new EmbedBuilder()
      .setColor(0x21fc00)
      .setTitle('Yesbot')
      .setDescription('get some help')
      .addFields({ name: 'last one alive', value: 'lock the door', inline: true })
      .setImage('https://cdn.discordapp.com/attachments/928074275158654978/928434470892240966/IMG_6585.png')
      .setTimestamp()
      .setFooter({ text: 'Yo did you know that you are cringe', iconURL: 'https://cdn.discordapp.com/attachments/928074275158654978/928434470892240966/IMG_6585.png' });

    await interaction.reply({ embeds: [helpEmbed] });
  },
};