exports.run = (client, message, args) => {
const config = require("../config.json");

   if(message.author.id !== config.ownerID) return message.channel.send("You are not my developer!")

   let text = args.join(" ")

   message.guild.members.forEach(member => {
      if (member.id !== client.user.id && !member.user.bot) member.send(text);
    });
   message.reply("DMs Successfully Sent!")

};
