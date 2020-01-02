exports.run = async (client, message, args) => {
    const Discord = require("discord.js")

if (message.author.id === "410495079439007755") {
    try {

		let codein = args.join(" ");
		let code = eval(codein);

		if (typeof code !== "string") code = require("util").inspect(code, { depth: 0 });
		let embed = new Discord.RichEmbed()
			.setAuthor("Evaluate")
			.setColor("RANDOM")
			.addField("📥 Input", `\`\`\`js\n${codein}\`\`\``)
			.addField("📤 Output", `\`\`\`js\n${code}\n\`\`\``)
			.addField("Type", typeof code);
		let msg = await message.channel.send(embed);

		await msg.react("❌");
		const reactions = await msg.awaitReactions(
			(reaction, user) => reaction.emoji.name === "❌" && user.id === message.author.id,
			{
				max: 1,
				time: 50000,
				errors: [
					"time"
				]
			}
		);
		if (reactions) {
			msg.delete();
			message.delete();
		}
	
 } catch(e) {
     //  message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
  } else {
		message.channel.send("Do not even try...");
	}

    }
