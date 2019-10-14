module.exports.run = async (client, msg, args) => {
	tMsg = await msg.channel.send("Summoning Duane...");

	await msg.channel.send( {files: ['./img/meme/duane.gif']} )

	tMsg.delete();
}

module.exports.help = {
	name: "duane"
}