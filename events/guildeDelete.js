module.exports = async (client, oldGuild) => {
    const guildOwner = await oldGuild.members.cache.get(oldGuild.ownerId);
    await client.webhook.send({
        embeds: [
            new EmbedBuilder()
            .setTitle("I left a guild!")
                .setDescription(
                    `**Name:** ${oldGuild.name} (\`ID: ${oldGuild.id}\`)` + 
                    `\n**Owner:** ${guildOwner.user.tag} (\`${oldGuild.ownerId}\`)` + 
                    `\n**Members:** ${oldGuild.memberCount.toLocaleString("en-US")}")}`
                )
                .setTimestamp()
                .setColor("Red")
            ]
    })
}