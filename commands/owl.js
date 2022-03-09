const { SlashCommandBuilder } = require(`@discordjs/builders`);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('owl')
		.setDescription('Ho(o)t'),
	async execute(interaction) {
        	const stolas = "https://tenor.com/view/helluvaboss-helluva-boss-blitz-helluva-boss-blitzo-helluva-boss-stolas-helluvaboss-stolitz-gif-22790479";
		const owl = "https://tenor.com/view/owl-gif-18640778";
		const gang = "https://media.discordapp.net/attachments/938217996650946661/938219442087792721/v1wzs.gifhttps://media.discordapp.net/attachments/938217996650946661/938219442087792721/v1wzs.gif";
		const tiptoe = "https://tenor.com/view/funny-owl-dancing-owl-owl-sneaky-gif-12975781https://tenor.com/view/funny-owl-dancing-owl-owl-sneaky-gif-12975781";
		const pat = "https://tenor.com/view/owl-pet-cuddle-gif-12741475";
		const bunnyEar = "https://tenor.com/view/birds-owl-funny-animals-feathers-hilarious-gif-10839965";
		const kith = "https://tenor.com/view/owl-love-kiss-gif-14026611";
		const stare = "https://cdn.discordapp.com/attachments/929848270094753802/951259350230528020/yes.jpg";
		const gyroscope = "https://cdn.discordapp.com/attachments/929848270094753802/951259377623507044/funny-gif-owl-head-movement-stabilize.gif";
		const postowl = "https://cdn.discordapp.com/attachments/929848270094753802/951259394249744384/0wl.jpg";
		const tPose = "https://cdn.discordapp.com/attachments/929848270094753802/951259405876359168/67813162_404891150407264_1029807448711737264_n.jpg";
		const sped = "https://cdn.discordapp.com/attachments/929848270094753802/951259420703227954/69705313_758377051288127_3588346567117919464_n.jpg";
		const leafhead = "https://cdn.discordapp.com/attachments/929848270094753802/951259441964138576/66499472_332796777604507_1288171598386696955_n.jpg";
		const stomp = "https://cdn.discordapp.com/attachments/929848270094753802/951259499598082108/walcc.jpg";
		const owls = [stolas, owl, gang, tiptoe, pat, bunnyEar, kith, stare, gyroscope, postowl, tPose, sped, leafhead, stomp];
		var result = owls[Math.floor(Math.random() * owls.length)];
		await interaction.reply(result);
	},
};
