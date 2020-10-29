const { Client } = require('discord.js');
const mongoose = require('mongoose');

const config = require('./config.json');

const guildMemberAdd = require('./events/guildMemberAdd');
const guildMemberRemove = require('./events/guildMemberRemove');
const message = require('./events/message');


// mongoDB init
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => console.log('Connected to database.'))
.catch(err => console.log(err));


// bot init
const bot = new Client();
bot.login(config.BOT_TOKEN);


bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}`);
    bot.user.setPresence( { status: 'online', activity: { name: 'your cmds', type: 'LISTENING' }  } )
    .then(presence => console.log(presence))
    .catch(err => console.log(err));
});

// Events
guildMemberAdd(bot);

guildMemberRemove(bot);

message(bot);