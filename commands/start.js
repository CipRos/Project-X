exports.run = (client, message, args) => {

let iuser = message.mentions.users.first() || client.users.get(args[0])

try {

let targChan = message.guild.channels.find(c => c.id == "667870313329066000") || null; // find the targeted channel
let messageid = targchan.fetchMessages("668445132735119374")

      if (targChan) { // make sure that the targeted channel exists, if it exists then fetch its last message
        targChan
          .fetchMessages({ limit: 1 })
          .then(f =>
/*
*******************
* Message Updater *
*******************
*/
            message.channel.send(
              `Last message from <#${target.id}> is...\n> ${f.first().content}`
            ) // send the last message to the initial channel
          );
      } else { //if target doesn't exist, send an error
        message.channel.send("Target does not exist!");
      }

} catch(err) {
 message.reply(`Error: ${err}`)
}

}
