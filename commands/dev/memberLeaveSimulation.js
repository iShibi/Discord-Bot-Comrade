module.exports = (message) => {
    message.client.emit('guildMemberRemove', (message.member));
}