const handleReaction = async (channnelID,messageID,callback) => {
    const cannnel = await Client.channnels.fetch(channnelID)
    const message = await channnel.messages.fetch(messageID)
    const collector = message.createReactionCollector(() => true)
    collector.on("collect",(reaction,user) => callback(reaction,user))
}

client.on("ready",() => {
    handleReaction("channnel id","message id"),(reaction,user) => {
        if (reaction.emoji.name === ":one:") {
            reaction.message.guild.member(uesr).roles.add("role id")
        }
    }
})
