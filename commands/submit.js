exports.run = (client, message, args) => {
const Discord = require("discord.js")

let type = args[0]
let subchan = client.channels.get("660121646958379044")
let att = message.attachments.first()

subchan.send("Command Works")

if(type == "map") {
if(message.attachments.first()){//checks if an attachment is sent
//        if(att.filename === `png`){//Download only png (customize this)    
           subchan.send(`Map submitted by ${message.author.tag}`, { files: [`${att}`]});
     subchan.send(att.filename
 //   }
  }
}


if(type == "model"){
if(message.attachments.first()){//checks if an attachment is sent
        if(att.filename === `png`){//Download only png (customize this)
      }
    }
  }
}
