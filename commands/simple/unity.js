const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('unity')
    .setDescription('Simple - unite'),
  async execute(interaction) {
    await interaction.reply('Bro after final battle of the Unity movie, when Boolean is talking to Spline, and Spline says \“damn we unified this shit, I guess we are now… a Unity.\” That went so hard');
  },
};