const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('die')
    .setDescription('Simple - for evan'),
  async execute(interaction) {
    let phrases = [
      'https://media.discordapp.net/attachments/993382253012992100/1083641871152197682/dies_of_cringe.gif?width=102&height=95',
      'https://images-ext-2.discordapp.net/external/3pGt36IyS8vS4XhlWG7VceEdX4gUFUPad6SBgaXZu-U/%3Fsize%3D96%26quality%3Dlossless/https/cdn.discordapp.com/emojis/1026638183955431444.gif?width=85&height=85'
    ]

    await interaction.reply(phrases[randomIntFromInterval(0, phrases.length)]);
  },
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}