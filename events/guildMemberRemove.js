module.exports = (bot) => {
    bot.on('guildMemberRemove', (member) => {
        let logChannel = member.guild.channels.cache.find(c => c.name === 'logs');
        if(logChannel) {
            logChannel.send(`${member.user.tag} left the server.`);
        } else {
            member.guild.channels.create('logs', { type: 'text' })
            .then(channel => channel.send(`${member.user.tag} left the server.`))
            .catch(err => console.log(err));
        }
    });
}