const Tag = require("../../schema/tag");

module.exports = (args, message) => {
    let keyString = args.shift();
    let valueString = args.join(' ');

    Tag.findOne( { key: keyString }, (err, doc) => {
        if(err) {
            console.log(err);
        } else if(doc) {
            message.channel.send(`\`${keyString}\` tag already exists, use something else.`);
        } else {
            const newTag = new Tag({
                author: message.author.username,
                key: keyString,
                value: valueString,
            });
            newTag.save()
            .catch(err => console.log(err));
            message.channel.send(`New tag go brrrrr. Use \`?${keyString}\` to use it.`);
        }
    });
}