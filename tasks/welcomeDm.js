module.exports = (member) => {
    let welcomeMessage = 'Hey there, welcome to the server.';
    member.send(welcomeMessage)
        .catch(err => console.log(`${member.user.tag} have their DMs closed.`));
}