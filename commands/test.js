exports.run = (client, message, args) => {

let iuser = message.mentions.users.first() || client.users.get(args[0])

try {

message.guild.fetchAuditLogs({
type: 'MEMBER_UPDATE', 
user: `${iuser}`}
).then(async (audit) => { 
let log = audit.entries.first().changes 
message.channel.send(log) 
});

} catch(err) {
 message.reply(`Error: ${err}`)
}

}
