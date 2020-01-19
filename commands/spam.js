exports.run = (client, message, args) => {
const config = require("../config.json");

if(message.author.id !== config.ownerID) return message.channel.send("You are not my developer!")
let timestorun = args[0]
let messagetosay = args.slice("2").join(" ")

if(timestorun > 100) return message.channel.send("Max times to run is 100")
for (let i = 0; i < timestorun; i++) { 
message.channel.send(messagetosay);
}

}
