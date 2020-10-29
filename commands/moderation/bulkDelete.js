module.exports = (message) => {
    let args = message.content.slice(1).split(' ');
    let amount = args.slice(-1);

    // send bulk deleted messages to a dedicated logs channel instead of to message.channel 
    message.channel.bulkDelete(parseInt(amount))
    .then(m => console.log(`Bulk deleted ${m.size} messages`))
    .catch(err => console.log(err));
}