const createChannel = require("./createChannel");

module.exports = (member) => {
    let logChannel = member.guild.channels.cache.find(c => c.name === 'logs');
    if (logChannel) {
        logChannel.send(`${member.user.tag} left the server.`);
    } else {
        createChannel(member.guild, 'logs', 'text')
            .then(channel => channel.send(`${member.user.tag} left the server.`))
            .catch(err => console.log(err));
    }
}