module.exports = (message) => {
    if(message.member.hasPermission('ADMININSTRATOR')) {
        let memberToKick = message.mentions.members.first();
        if(memberToKick) {
            if(memberToKick.kickable) {
                memberToKick.kick();
            } else {
                message.reply('you cannot kick this person.');
            }
        } else {
            message.reply('you need to mention a member with this cmd to kick them.');
        }
    } else {
        message.reply('you do not have permission to use this cmd.');
    }
}