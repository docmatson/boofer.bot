module.exports.run = async (client, msg, args) => {
	msg.channel.send(`${msg.author} is about to boof hard, come and join them!`);
	var fs = require('fs');
	var boofFiles = fs.readdirSync('./img/boof/')
	let chosenFile = boofFiles[Math.floor(Math.random() * boofFiles.length)]

	msg.channel.send( {files: [`./img/boof/${chosenFile}`]} )
}

module.exports.help = {
	name: "boof"
}