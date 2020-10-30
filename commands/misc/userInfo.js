const { MessageEmbed } = require("discord.js");


module.exports = (message) => {
    const member = message.member;
    const userInfoEmbed = new MessageEmbed()
    .setColor('#ff3723')
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`Info about **${member.user.tag}** (ID: ${member.user.id})

    **Member Details**
    Nickname: ${member.displayName}
    Joined: ${formatDate(member.joinedTimestamp)}
    Roles: \`${roleList(member)}\`

    **User Details**
    ID: ${member.user.id}
    Username: ${member.user.username}
    Created: ${formatDate(member.user.createdTimestamp)}
    Status: ${member.user.presence.status.toUpperCase()}
    Activity: ${checkActivity(member)}
    `);

    message.channel.send(userInfoEmbed);
}

function formatDate(timeStamp) {
    let date = new Date(timeStamp).getDate();
    // months in js starts from 0, we have to add 1 to get the correct month
    let month = new Date(timeStamp).getMonth()+1;
    let year = new Date(timeStamp).getFullYear();

    let hour = new Date(timeStamp).getUTCHours();
    let minute = new Date(timeStamp).getUTCMinutes();
    let second = new Date(timeStamp).getUTCSeconds();

    let fullDate = `${date}-${month}-${year} ${hour}:${minute}:${second}`;
    return fullDate;
}

function roleList(member) {
    let roleNameString = '';
    member.roles.cache.forEach(role => {
        let roleName = role.name;
        roleNameString += `${roleName} | `
    });
    return roleNameString;
}

// this function is here because we have to make sure that the activities array in not empty
function checkActivity(member) {
    let activity = member.user.presence.activities[0];
    if(activity) {
        return activity.name;
    } else {
        return 'None';
    }
}