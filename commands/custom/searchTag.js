const Tag = require('../../schema/tag');

module.exports = (cmd, message) => {
    let keyString = cmd;
    Tag.findOne( { key: keyString }, (err, doc) => {
        if(err) {
            console.log(err);
        } else if(doc) {
            message.channel.send(doc.value);
        } else {
            message.channel.send('This tag does not exist. Use \`?add <cmd> <description>\` to create the tag.');
        }
    });
}