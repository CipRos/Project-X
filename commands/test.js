exports.run = (client, message, args) => {
const Discord = require("discord.js")
     (async () => {
    const captureWebsite = require('capture-website');
    await captureWebsite.file('https://spsknm.edupage.org/substitution/', 'suplovanie.png');
})();
    const suplovanie = new Attachment("./suplovanie.png");
    msg.channel.send(suplovanie);

}
