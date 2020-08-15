module.exports.run = async (client, msg, args) => {
	var fs = require('fs');
	var hashFiles = fs.readdirSync('./img/hash/')
	let chosenFile = hashFiles[Math.floor(Math.random() * hashFiles.length)]

	msg.channel.send( {files: [`./img/hash/${chosenFile}`]} )
}

module.exports.help = {
	name: "hashrosin"
}
