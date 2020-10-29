module.exports = async (message) => {
    let invite = await message.channel.createInvite({maxAge: 0});
    message.channel.send(`${invite}`);
}