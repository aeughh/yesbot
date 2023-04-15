// Initialization
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
// const { } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Command Registration
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
  }
}

// Variables
let activities = [`nothing`, `something, probably`, `you, because you just got played`]
i = 0;
var catbruh;
var luckybaldbazooka;

// Log In
client.once(Events.ClientReady, () => {
  console.log(`YesBot has logged in as ${client.user.tag} with absolutely no errors whatsoever.`);
  client.user.setPresence({
    status: "online",
    activity: {
      name: "To Your Mother",
      type: "Listening"
    }
  });
});
//activities[randomIntFromInterval(0, activities.length)]

// Get Interactions
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
    } else {
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  }
});

client.login(process.env['TOKEN']);

// Functions
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}