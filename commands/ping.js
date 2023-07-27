const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("ping").setDescription("Replies with pong!"),
    
    async execute(client, interaction) {
        await interaction.reply("Pong!");
        await client.webhook.send({ content: "Pong but its a webhook!" });
    }
}