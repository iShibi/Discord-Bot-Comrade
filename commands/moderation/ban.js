module.exports = (message) => {
    if(message.member.hasPermission('ADMINISTRATOR')) {
        let memberToBan = message.mentions.member.first();
        if(memberToBan) {
            if(memberToBan.bannable) {
                memberToBan.ban();
            } else {
                message.reply(`you cannot ban \`${memberToBan.user.tag}\`.`);
            }
        } else {
            message.reply('you need to mention a member with this cmd to ban them.');
        }
    } else {
        message.reply('you do not have permission to use to this cmd.');
    }
}