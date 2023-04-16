const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chingchong')
    .setDescription('Goof - for ethan'),
  async execute(interaction) {
    let phrases = [
      'let it ching\, let it chong',
      'ching me to the chong',
      'you are such a ching chong',
      'bing bong',
      'ling long',
      'i tried so ching and got so chong, but in the end it doesnt even chingchong'
    ]

    await interaction.reply(phrases[randomIntFromInterval(0, phrases.length - 1)]);
  },
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}