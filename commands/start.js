exports.run = (client, message, args) => {

try {

let targChan = message.guild.channels.find(c => c.id == "667870313329066000") || null // find the targeted channel
let messageid = targChan.fetchMessages("668445132735119374")

      if (!targChan) return message.channel.send("No targChan");
targChan.fetchMessages({ limit: 1 }).then(f =>
            //f.first().edit(`${f.first().content}`)
            f.first().edit("b")
            message.channel.send(`:white_check_mark: | <#667870313329066000> has been updated`)
)
} catch(err) {
 message.reply(`Error: ${err}`)
}

}
