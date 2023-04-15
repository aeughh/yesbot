const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bulkdelete')
    .setDescription('Useful - Deletes messages, now in bulk!')
    .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to look through').setRequired(true))
    .addStringOption(option => option.setName('id').setDescription('ID of user you want to delete the messages of').setRequired(true)),
  async execute(interaction) {
    const amount = interaction.options.getInteger('amount');
    const id = interaction.options.getString('id');

    interaction.channel.messages.fetch({
      limit: amount
    }).then((messages) => {
      const chosenMessages = [];
      messages.filter(m => m.author.id === id).forEach(msg => chosenMessages.push(msg));
      
      interaction.channel.bulkDelete(chosenMessages).then(() => {
        return interaction.reply({content: `Deleted \`${amount}\` messages from \`${id}\`, wow`, ephemeral: false});
        })
      });
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