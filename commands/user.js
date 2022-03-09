const { SlashCommandBuilder } = require(`@discordjs/builders`);

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`user`)
        .setDescription(`Replies with user info!`)
        .addUserOption((option) =>
            option
                .setName(`user`)
                .setDescription(`Who's info do you want?`)
                .setRequired(false)
        ),
    async execute(interaction) {
        const user = interaction.options.getUser(`user`);
        await interaction.reply(`User: ${user}\nId: ${user.id}`);
    },
};
