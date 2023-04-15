const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coin1')
    .setDescription('Probably - "nooo im the right hand of the father you cant defeat me" 2 coins and a railcannon:'),
  async execute(interaction) {
    interaction.reply(`https://media.discordapp.net/attachments/908560306484170813/1096299751386906644/ultrakill-when-607620722.gif?width=445&height=250`);
  }
};