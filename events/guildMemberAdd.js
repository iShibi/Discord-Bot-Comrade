const welcome = require("../tasks/welcome");
const welcomeDm = require("../tasks/welcomeDm");

module.exports = (bot) => {
    bot.on('guildMemberAdd', (member) => {
        welcome(member);
        welcomeDm(member);
    });
}