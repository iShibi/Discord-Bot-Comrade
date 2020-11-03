const createChannel = require("./createChannel");

module.exports = (member) => {
    let welcomeChannel = member.guild.channels.cache.find(c => c.name === 'welcome');
    if (welcomeChannel) {
        welcomeChannel.send(`Welcome to the server ${member.user}`);
    } else {
        createChannel(member.guild, 'welcome', 'text')
            .then(channel => channel.send(`Welcome to the server ${member.user}`))
            .catch(err => console.log(err));
    }
}