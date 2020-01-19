exports.run = (client, message, args) => {

try {

let targChan = message.guild.channels.find(c => c.id == "667870313329066000") || null // find the targeted channel
let messageid = targChan.fetchMessages("668521067995988009")

targChan.fetchMessages({ limit: 1 }).then(f => f.first().edit(f.first().content + " "));
message.channel.send(`:white_check_mark: | <#667870313329066000> has been updated`)
} catch(err) {
//f.first().edit(`${f.first().content}`)
 message.reply(`Error: ${err}`)
}

}
