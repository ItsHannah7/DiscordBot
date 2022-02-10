const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(`cock`)
		.setDescription(`yep cock`),
	async execute(interaction) {
		await interaction.reply(`and balls`);
	},
};
