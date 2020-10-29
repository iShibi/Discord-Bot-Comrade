const addTag = require("./addTag");
const searchTag = require("./searchTag");

module.exports = (message) => {
    let args = message.content.slice(1).split(' ');
    let cmd = args.shift();

    if(cmd === 'add') {
        addTag(args, message);
        // let keyString = args.shift();
        // let valueString = args.join(' ');

        // Tag.findOne( { key: keyString }, (err, doc) => {
        //     if(err) {
        //         console.log(err);
        //     } else if(doc) {
        //         message.channel.send(`\`${keyString}\` tag already exists, use something else.`);
        //     } else {
        //         const newTag = new Tag({
        //             author: message.author.username,
        //             key: keyString,
        //             value: valueString,
        //         });
        //         newTag.save()
        //         .catch(err => console.log(err));
        //         message.channel.send(`New tag go brrrrr. Use \`?${keyString}\` to use it.`);
        //     }
        // });
    } else {
        searchTag(cmd, message);
        // let keyString = cmd;
        // Tag.findOne( { key: keyString }, (err, doc) => {
        //     if(err) {
        //         console.log(err);
        //     } else if(doc) {
        //         message.channel.send(doc.value);
        //     } else {
        //         message.channel.send('This tag does not exist. Use \`?add <cmd> <description>\` to create the tag.');
        //     }
        // });
    }
}