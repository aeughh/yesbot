const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pin')
    .setDescription('Useful - Pins a specified message to #pining-for-the-fjords')
    .addStringOption(option => option.setName('messagelink').setDescription('Link of message that you want to pin').setRequired(true)),
  async execute(interaction) {
    var globalVariables = {}; // Globally scoped object, might bring pain later on but fuck it

    const pinsChannel = interaction.client.channels.cache.get('1071724163510845440');

    globalVariables.messageLink = interaction.options.getString('messagelink');
    globalVariables.messageID = globalVariables.messageLink.split('/')[globalVariables.messageLink.split('/').length - 1];
    globalVariables.messageContent = 'placeholder, if you see this i fucked up';

    // Fetches the message information from the specified ID and puts it into variables
    interaction.channel.messages.fetch(globalVariables.messageID).then(message => {
      globalVariables.messageContent = message.content;
      // globalVariables.messageUser = message.user;
      // globalVariables.messageContent = message.author;

      var pinnedMessageEmbed = new EmbedBuilder()
        .setColor(0xff6600)
        .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`, url: globalVariables.messageLink })
        .setDescription(globalVariables.messageContent)
        // .setFooter({ text: `<t:${message.createdTimestamp}:F>`});
        .setTimestamp(message.createdTimestamp);

      pinsChannel.send({ embeds: [pinnedMessageEmbed] });
    }).catch(console.error);

    await interaction.reply(`${interaction.user} pinned a message to #pining-for-the-fjords`);
  }
};