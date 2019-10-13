module.exports.run = async (client, msg, args) => {
	msg.channel.send('Calculating...').then(tmsg =>{
		tmsg.edit(`Latency to server is: ${tmsg.createdTimestamp - msg.createdTimestamp}ms. API Latency to server is: ${Math.round(client.ping)}ms`)
	});
}

module.exports.help = {
	name: "ping"
}