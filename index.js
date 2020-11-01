const { Client } = require('discord.js');
const mongoose = require('mongoose');

const guildMemberAdd = require('./events/guildMemberAdd');
const guildMemberRemove = require('./events/guildMemberRemove');
const message = require('./events/message');


// mongoDB init
let uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log('Connected to database.'))
    .catch(err => console.log(err));


// bot init
const bot = new Client();
let token = process.env.TOKEN;
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