const logger = require('../modules/logger')
const config = require('../utils/get-config');
const check_admin = require('../utils/check-admin')
const profileModel = require('../utils/Schema/ProfileSchema');
const { MessageEmbed } = require('discord.js');
const BlockUserModel = require('../utils/Schema/BlockUserSchema');
const err_embed = require('../utils/error-embed')

exports.run = (client, message, args) => {
    try {
        async function run(){
            // 権限の確認
        var permission_check = check_admin(message, client)

        if (permission_check == ('owner: no')){
            return;
        }
    }
//定型文

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

//定型文
} catch (err) {
    logger.error("コマンド実行エラーが発生しました")
    logger.error(err)
    message.channel.send(({embeds: [err_embed.main]}))
    if(config.debug.enable.includes("true")){
        message.channel.send(({embeds: [err_embed.debug]}))
        message.channel.send("エラー内容: ")
        message.channel.send("```\n"+ err + "\n```")
    }
}
}

exports.name = "role";
