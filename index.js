const { Client } = require('discord.js');
const mongoose = require('mongoose');

const config = require('./config.json');

const guildMemberAdd = require('./events/guildMemberAdd');
const guildMemberRemove = require('./events/guildMemberRemove');
const message = require('./events/message');


// mongoDB init
let uri = config.MONGODB_URI || process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('Connected to database.'))
    .catch(err => console.log(err));


// bot init
const bot = new Client();
let token = config.BOT_TOKEN || process.env.BOT_TOKEN;
bot.login(token);


bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
    bot.user.setPresence({ status: 'online', activity: { name: 'your cmds', type: 'LISTENING' } })
        .catch(err => console.log(err));
});

// Events
guildMemberAdd(bot);

guildMemberRemove(bot);

message(bot);