module.exports.run = async (client, msg, args) => {
	let tMsg = await msg.channel.send("Generating weed image...");

	var fs = require('fs');
	var weedFiles = fs.readdirSync('./img/weed/')
	let chosenFile = weedFiles[Math.floor(Math.random() * weedFiles.length)]

	await msg.channel.send( {files: [`./img/weed/${chosenFile}`]} )

	tMsg.delete();
}
module.exports.help = {
	name: "weed"
}