module.exports.run = async (client, msg, args) => {
	msg.reply("I love you!");
	msg.channel.send( {files: ['./img/meme/bothug.gif']} )
}

module.exports.help = {
	name: "love"
}