const Discord = require('discord.js');
var jimp = require('jimp');
var fs = require('fs');

module.exports.run = async (client, msg, args) => {
	var fileName = './img/tweet_snoop.png';
	var imgCaption = args.join(" ");
	var loadedImg;

	if(imgCaption.length > 140){
		return msg.channel.send("Oops Snoop tweets are limited to 140 characters")
	}

	function writeImg() {
		jimp.read(fileName)
			.then(function (img) {
				loadedImg = img;
				return jimp.loadFont(jimp.FONT_SANS_32_BLACK);
			})
			.then(function (font){
				loadedImg.print(font, 10, 130, imgCaption, 600)
						 .write("./img/snoop_edited.png");
			})
			.catch(function (err){
				console.error(err);
			});
	}

	function sendImg() {
		msg.channel.send({files: [
			{
				attachment: "./img/snoop_edited.png",
				name: "snoop.png"
			}
		]});
	}

	writeImg();

	setTimeout(sendImg, 5000);
};

module.exports.help = {
	name: "tweet"
}