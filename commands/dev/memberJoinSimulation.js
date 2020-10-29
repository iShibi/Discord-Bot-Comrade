module.exports = (message) => {
    message.client.emit('guildMemberAdd', (message.member));
}