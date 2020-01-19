exports.run = (client, message, args) => {
   let target = message.mentions.users.first() || message.guild.members.get(args[0])
   let nickname = args.slice("2").join(" ")

    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You are missing the petmission: \*\*Manage Nicknames\*\*")

    const config = require("../config.json");
    if(message.author.id !== config.ownerID) {

    if(target.hasPermission("MAMAGE_NICKNAMES")) return message.channel.send("Can't change a staff's nickname!");
    message.guild.members.get(target).setNickname(nickname)
    message.channel.send(`:white_check_mark: | Succesfully updated ${target}\`s Nickname`)
    
} else {

    message.guild.members.get(target).setNickname(nickname)
    message.channel.send(`:white_check_mark: | Succesfully updated ${target}\`s Nickname`)

}
   

}
