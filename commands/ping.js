exports.run = (client, message, args) => {
    const Discord = require("discord.js")

    const embeddo = new Discord.RichEmbed()
    .setTitle("Pong!")
    .setColor("RANDOM")
    .setDescription(`${Math.round(client.ping)}ms`)

    message.channel.send(embeddo).catch(console.error);
}
