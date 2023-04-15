const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('baldreact')
    .setDescription('Goof - Toggles yesbot\'s constant reacting to messages with :luckybaldbazooka:'),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(`Uh oh! looks like I havent coded this yet. Woopsy!`);
  },
};