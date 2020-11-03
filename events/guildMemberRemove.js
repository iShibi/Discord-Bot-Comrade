const memberLeft = require("../tasks/memberLeft");

module.exports = (bot) => {
    bot.on('guildMemberRemove', (member) => {
        memberLeft(member);
    });
}