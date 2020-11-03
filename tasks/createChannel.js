module.exports = async (guild, channelName, channelType) => {
    const newChannel = await guild.channels.create(channelName, { type: channelType });
    return newChannel;
}