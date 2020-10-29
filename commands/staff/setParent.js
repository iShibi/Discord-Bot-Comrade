module.exports = (message) => {
    let parentID = message.content.split(' ').slice(-1).toString();
    message.channel.setParent(parentID, { lockPermissions: true })
    .then(channel => {
        message.channel.send(`${message.channel} has been assigned to a new category.`);
    }).catch(err => {
        message.channel.send('Plese enter a valid category ID.');
    });
}