const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pulse')
		.setDescription('Ferret = pog'),
	async execute(interaction) {
        const ferret = new MessageAttachment("Ferret1.jpg");
		await interaction.reply({files: [ferret]});
	},
};
