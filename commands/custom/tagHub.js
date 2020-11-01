const addTag = require("./addTag");
const searchTag = require("./searchTag");

module.exports = (message) => {
    let args = message.content.slice(1).split(' ');
    let cmd = args.shift();

    if (cmd === 'add') {
        addTag(args, message);
    } else {
        searchTag(cmd, message);
    }
}