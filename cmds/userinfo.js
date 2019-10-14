const Discord = require('discord.js')

module.exports.run = async (client, msg, args) => {
	let mentionMember = msg.mentions.members.first();

	if(!mentionMember){
		var userInfo = new Discord.RichEmbed()
			.addField("---User info---",
					  "**Full Username: **" + `${msg.author.tag}` + "\n" +
					  "**ID: **" + msg.author.id + "\n" +
					  "**Created At: **" + msg.author.createdAt, true)
			.setThumbnail(msg.author.avatarURL)

			msg.channel.send(userInfo);
	}else{
		var mentionInfo = new Discord.RichEmbed()
			.addField("---User info---",
					  "**Full Username: **" + mentionMember.user.tag + "\n" +
					  "**ID: **" + mentionMember.id + "\n" +
					  "**Created At: **" + mentionMember.user.createdAt, true)

			.setThumbnail(mentionMember.user.avatarURL)

		msg.channel.send(mentionInfo);
	}
}

module.exports.help = {
	name: "userinfo"
}