const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName("stats").setDescription("View some basic information"),
    
    async execute(client, interaction) {
        const guilds = await client.guilds.fetch();

        await interaction.reply({ embeds: [new EmbedBuilder().setTitle("Bot Stats").setTimestamp().setColor("Red").setDescription(
            `Total Guilds: \`${guilds.size}\`\n`
        )] });
    }
}