const memberJoinSimulation = require("../commands/dev/memberJoinSimulation");
const memberLeaveSimulation = require("../commands/dev/memberLeaveSimulation");

// Dev imports above


const ban = require("../commands/moderation/ban");
const kick = require("../commands/moderation/kick");
const softban = require("../commands/moderation/softban");
const createInvite = require("../commands/misc/createInvite");
const setParent = require("../commands/staff/setParent");
const tagHub = require("../commands/custom/tagHub");
const bulkDelete = require("../commands/moderation/bulkDelete");
const userInfo = require("../commands/misc/userInfo");
const musicPlayer = require("../commands/music/musicPlayer");

module.exports = (bot) => {
    bot.on('message', (message) => {

        // custom cmds
        if (message.content.startsWith('?')) {
            tagHub(message);
        }

        // dev cmds
        if (message.content.startsWith('!joinSim')) {
            memberJoinSimulation(message);
        }
        if (message.content.startsWith('!leaveSim')) {
            memberLeaveSimulation(message);
        }

        // misc cmds
        if (message.content.startsWith('!invite')) {
            createInvite(message);
        }

        if (message.content.startsWith('!me')) {
            userInfo(message);
        }

        // moderation cmds
        if (message.content.startsWith('!kick')) {
            kick(message);
        }

        if (message.content.startsWith('!ban')) {
            ban(message);
        }

        if (message.content.startsWith('!softban')) {
            softban(message);
        }

        if (message.content.startsWith('!bulkDelete')) {
            bulkDelete(message);
        }

        // music cmds
        if (message.content.startsWith('!music')) {
            musicPlayer(message);
        }

        // staff cmds
        if (message.content.startsWith('!setParent')) {
            setParent(message);
        }
    });
}