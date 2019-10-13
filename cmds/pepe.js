module.exports.run = async (client, msg, args) => {
	let tMsg = await msg.channel.send("Generating frog meme...");

	var fs = require('fs');
	var weedFiles = fs.readdirSync('./img/pepe/')
	let chosenFile = weedFiles[Math.floor(Math.random() * weedFiles.length)]

	await msg.channel.send( {files: [`./img/pepe/${chosenFile}`]} )

	tMsg.delete();
}
module.exports.help = {
	name: "pepe"
}