const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pin')
    .setDescription('Useful - Pins a specified message to #pining-for-the-fjords')
    .addStringOption(option => option.setName('messagelink').setDescription('Link of message that you want to pin').setRequired(true)),
  async execute(interaction) {
    const messageLink = interaction.options.getString('messagelink');

    const messageID = messageLink.split('/')[messageLink.split('/').length - 1];
    const messageContent = msg.messages.fetch(messageID);
// 'https://discord.com/channels/928074274500132865/1096585622115844126/1096617360623927377'
    
    const pinnedMessageEmbed = new EmbedBuilder()
      .setColor(0xff6600)
      .setURL('https://youtube.com'/*messageLink*/)
      .setAuthor({ name: 'garmiriono', iconURL: 'https://media.discordapp.net/attachments/928074275158654978/1096492485804556379/ContactPhotoRetouching-IMG_20230331_130651.jpg?width=609&height=609', url: 'https://aeughh.github.io' })
      .setDescription(messageContent)
      .setFooter({ text: 'time' });

    const pinsChannel = interaction.client.channels.cache.get('1071724163510845440');
    pinsChannel.send({ embeds: [pinnedMessageEmbed] });
    await interaction.reply(`${interaction.user} pinned a message to #pining-for-the-fjords`);
  }
    // if (amount < 1 || amount > 99) {
    //   return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });
    // }
    // await interaction.channel.bulkDelete(amount, true).catch(error => {
    //   console.error(error);
    //   interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
    // });

    // return interaction.reply({ content: `Successfully pruned \`${amount}\` messages.`, ephemeral: true });
};