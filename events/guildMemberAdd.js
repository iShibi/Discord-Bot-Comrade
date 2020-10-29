module.exports = (bot) => {
    bot.on('guildMemberAdd', (member) => {
        let welcomeChannel = member.guild.channels.cache.find(c => c.name === 'welcome');
        if(welcomeChannel) {
            welcomeChannel.send(`Welcome to the server ${member.user}!`);
        } else {
            member.guild.channels.create('welcome', { type: 'text' })
            .then(channel => channel.send(`Welcome to the server ${member.user}!`))
            .catch(err => console.log(err));
        }
    });
}