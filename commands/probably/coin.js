const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('coin')
    .setDescription('Probably - Flips a coin and tells that you lost'),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    if (Math.floor(Math.random() * 2) === 1) {
      interaction.reply(`${interaction.user} won the argument due to a stupid coin flip.`);
    } else {
      interaction.reply(`${interaction.user} lost the argument due to a stupid coin flip.`);
    }
  }
};