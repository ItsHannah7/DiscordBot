const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sc')
		.setDescription('Shows a random screenshot from lightshot!'),
	async execute(interaction) {
		await interaction.reply('https://prnt.sc/' + makeid(6));
	},
};

function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (result[0] != '0') {
        return result;
    } else {
        makeid(length);
    }

}
