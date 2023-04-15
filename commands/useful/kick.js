const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Useful - kicks people, but doesn\'t actually'),
  // .addStringOption(option =>
  //   option.setName('User')
  //     .setDescription('The user to kick')
  //     .setRequired(true)),
  async execute(interaction) {
    // const member = interaction.options.getMember('target');
    return interaction.reply({ content: `${interaction.user.username} tried to kick ${interaction.user.username}, but because you are cringe it has not happened` });
  },
};