const { EmbedBuilder } = require("discord.js");

module.exports = async (client, newGuild) => {
    const guildOwner = await newGuild.members.cache.get(newGuild.ownerId);
    await client.webhook.send({
        embeds: [
            new EmbedBuilder()
            .setTitle("I joined a new guild!")
                .setDescription(
                    `**Name:** ${newGuild.name} (\`${newGuild.id}\`)` + 
                    `\n**Owner:** ${guildOwner.user.tag} (\`${newGuild.ownerId}\`)` + 
                    `\n**Members:** ${newGuild.memberCount.toLocaleString("en-US")}` +
                    `\n\n**Total guilds: ${client.guilds.cache.size.toLocaleString("en-US")}**`
                )
                .setTimestamp()
                .setColor("Green")
            ]
    });
}