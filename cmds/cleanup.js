module.exports.run = async (client, msg, args) => {
	if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply("**Sorry you can't run this command");
	var msgNumber = args[0];
	if(!args[0]) return msg.channel.send("Please include a number of messages to clean up.");
	if(args[0] > 99) return msg.channel.send("I can only clean up 99 messages at a time.");
	msg.channel.fetchMessages({limit: msgNumber})
	.then(messages => msg.channel.bulkDelete(messages.size + 1))
	.catch(error => msg.channel.send(`Sorry, ${msg.author} Failed to clean up messages because: *${error}*`));
}

module.exports.help = {
	name: "cleanup"
}