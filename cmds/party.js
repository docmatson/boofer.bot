module.exports.run = async (client, msg, args) => {
	tMsg = await msg.channel.send("Opening the keg...");

	var fs = require('fs');
	var partyFiles = fs.readdirSync('./img/party/')
	let chosenFile = partyFiles[Math.floor(Math.random() * partyFiles.length)]

	await msg.channel.send( {files: [`./img/party/${chosenFile}`]} )

	tMsg.delete();
}

module.exports.help = {
	name: "party"
}