exports.run = (client, message, args) => {

const Discord = require("discord.js")
const webshot = require("webshot")
try {
 webshot("http://example.com", "scrn.png")
    const att = new Attachment("./scrn.png");
    msg.channel.send(suplovanie);
} catch(err) {
 message.reply(`Error: ${err}`)
}

}
