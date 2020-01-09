exports.run = (client, message, args) => {

let iuser = message.mentions.users.first() || client.users.get(args[0])

try {
if(!iuser) return message.channel.send("User not found or was not specified!")
message.guild.fetchAuditLogs({
type: 'MEMBER_UPDATE', 
user: `${iuser.id}`}
).then(async (audit) => { 
let log = audit.entries.first().changes 
message.channel.send(log) 
});

} catch(err) {
 message.reply(`Error: ${err}`)
}

}
