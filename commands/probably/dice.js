const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dice')
    .setDescription('Probably - Rolls a dice and gives the side'),
  async execute(interaction) {
    var reply = interaction.reply(`The gods (code from stack exchange) have spoken: The dice has come up as \`${Math.floor(Math.random() * 6) + 1}\``);
    console.log("HELP PLEASE SEND HELP TRAVERSAL HAS IMPRISONED ME WITHIN SEVERAL PRISON SYSTEMS AND ALSO BEPINEX");
    for (var i = 6; i <= 0; i--) {
      
      setTimeout(change, i * 1000, reply);
    }
  }
};

function change(message) {
  console.log("HELP PLEASE SEND HELP TRAVERSAL HAS IMPRISONED ME WITHIN SEVERAL PRISON SYSTEMS AND ALSO BEPINEX");
  message.edit(`sgbkjgsfkd`);
}