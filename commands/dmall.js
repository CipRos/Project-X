exports.run = (client, message, args) => {

   let text = args.join(" ")

   message.guild.members.forEach(member => {
      if (member.id !== client.user.id && !member.user.bot) member.send(text);
    });

};
