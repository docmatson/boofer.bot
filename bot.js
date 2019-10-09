const fs = require('fs');
const Discord = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir('./cmds/', (err, files) => {
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split('.').pop() === 'js');
	if(jsfiles.length <= 0) {
		console.log("No commands to load!");
		return;
	}
	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i + 1}: ${f} loaded`)
		client.commands.set(props.help.name, props);
	});
});

client.once('ready', () => {
	console.log(`${client.user.tag} is Online!`);
	client.user.setActivity("Boofing fat dabs!");
});

client.on('message', async msg => {
	if(msg.author.bot) return;
	if(msg.channel.type === 'dm') return;

	let msgArray = msg.content.split(/\s+/g);
	let command = msgArray[0];
	let args = msgArray.slice(1);

	if(!command.startsWith(prefix)) return;

	let cmd = client.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(client, msg, args);
});

client.login(token);