const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bulkdelete')
    .setDescription('Useful - Deletes messages, now in bulk!')
    .addIntegerOption(option => option.setName('amount').setDescription('Number of messages to look through').setRequired(true))
    .addUserOption(option => option.setName('user').setDescription('User you want to delete the messages of').setRequired(true)),
  async execute(interaction) {
    const amount = interaction.options.getInteger('amount');
    const user = interaction.options.getUser('user');

    interaction.channel.messages.fetch({ limit: amount }).then((messages) => {
      const chosenMessages = [];
      messages.filter(m => m.author.id === user.id).forEach(msg => chosenMessages.push(msg));

      interaction.channel.bulkDelete(chosenMessages).catch(console.error);
      // interaction.channel.send(`Deleted \`${amount}\` messages from \`${user}\`, wow. This needs to be made an interaction.reply so that it can be ephmeral, but I have no idea why it's not working so it's going to stay like this for now.`);
    });
    
    await interaction.reply({ content: `Deleted ${amount} messages from ${user}, wow`, ephemeral: true });
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