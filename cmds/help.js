const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
		fs.readdir('./cmds/', (err, files) => {
			if(err) console.error(err);

			let jsFiles = files.filter(f => f.split(".").pop() === "js");
				if(jsFiles.length <= 0) {
					console.log("No commands!");
					return;
			}
			
			var nameList = "";
			let helpembed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setTitle("Commands:")

			let result = jsFiles.forEach((f, i) => {
				let props = require(`./${f}`);
				namelist = props.help.name;
				helpembed.addField("~~~", namelist, true)
				
			});
			
			msg.channel.send(helpembed);

		})
}

module.exports.help = {
	name: "help"
}
