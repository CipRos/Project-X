exports.run = (client, message, args) => {
const Discord = require("discord.js")

let type = args[0]
let subchan = client.channels.get("660121646958379044")
let att = message.attachments.first()

subchan.send("Command Works")
try {
if(type == "map") {
if(message.attachments.first()){//checks if an attachment is sent
//        if(att.filename === `png`){//Download only png (customize this)    
           subchan.send(att.filename)
           subchan.send(`Map submitted by ${message.author.tag}\n\nURL: ${att.url}`);
     
 //   }
  }
}


if(type == "model"){
if(message.attachments.first()){//checks if an attachment is sent
        if(att.filename === `png`){//Download only png (customize this)
      }
    }
  }
} catch(error) {
message.channel.send("There was an error whil trying to submit your work! **Please contact Cip 2.0#0001**")
}
}
