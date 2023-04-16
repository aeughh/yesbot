const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('baldreact')
    .setDescription('Goof - Toggles yesbot\'s constant reacting to messages with :luckybaldbazooka:'),
  async execute(interaction) {
    const data = fs.readFileSync('./config.json', 'utf8')
      var content = JSON.parse(data);
      var br = content.br;
      if(br == true){
          content.br = false;
        await interaction.reply("bald react deactivated");
        }
      else {
          content.br = true;
        await interaction.reply("bald react activated");
        }
    fs.writeFileSync('./config.json', JSON.stringify(content, null, 4));
    
  }
}