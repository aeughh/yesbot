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
 /*  */     globalVariables.messageAttachments = message.attachments;
      // globalVariables.messageUser = message.user;
      // globalVariables.messageContent = message.author;
      console.log(globalVariables.messageAttachments);
      // if (globalVariables.messageAttachments != null) {
      //   var pinnedMessageEmbed = new EmbedBuilder()
      //     .setColor(0xff6600)
      //     .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`, url: globalVariables.messageLink })
      //     .setDescription(`Click to see attachments (temporary until I add attachments to the pin command)`)
      //     .setTimestamp(message.createdTimestamp);
      // } else {
      //   var pinnedMessageEmbed = new EmbedBuilder()
      //     .setColor(0xff6600)
      //     .setAuthor({ name: `${message.author.username}`, iconURL: `${message.author.displayAvatarURL()}`, url: globalVariables.messageLink })
      //     .setDescription(globalVariables.messageContent)
      //     .setTimestamp(message.createdTimestamp);
      // }

      // FIGURE OUT HOW TO READ 'Collection(0) [Map] {}' What the fuck does this mean
      // if (array === undefined || array.length == 0) {
      //   // array does not exist or is empty
      //   }

      // pinsChannel.send({ embeds: [pinnedMessageEmbed] });
    }).catch(console.error);

    await interaction.reply(`${interaction.user} pinned a message to #pining-for-the-fjords`);
  }
};