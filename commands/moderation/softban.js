module.exports = (message) => {
    if(message.member.hasPermission('ADMINISTRATOR')) {
        let memberToSoftban = message.mentions.members.first();
        if(memberToSoftban) {
            if(memberToSoftban.bannable) {
                let memberManager = memberToSoftban.guild.members;
                memberManager.ban(memberToSoftban.user.id);
                memberManager.unban(memberToSoftban.user.id);
            } else {
                message.reply(`you cannot softban ${memberToSoftban.user.tag}`);
            }
        } else {
            message.reply('mention a member with this cmd to softban them.');
        }
    } else {
        message.reply('you do not have permission to use this cmd.');
    }
}