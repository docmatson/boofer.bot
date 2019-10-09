module.exports.run = async (client, msg, args) => {
	tMsg = await msg.channel.send("Generating dab image...");

	var fs = require('fs');
	var dabFiles = fs.readdirSync('./img/dabs/')
	let chosenFile = dabFiles[Math.floor(Math.random() * dabFiles.length)]

	await msg.channel.send( {files: [`./img/dabs/${chosenFile}`]} )

	tMsg.delete();
}
module.exports.help = {
	name: "dabs"
}