const axios = require("axios");
const DiscordJS = require("discord.js");

const cInstaller = require("c-installer");

const discord_client = new DiscordJS.Client();

const ci_client = new cInstaller.Client({ client: discord_client })

ci_client.discord.load(async function docs(req) {
const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
    req.args
    )}`;
    await axios
    .get(url)
    .then((t) => req.msg.channel.send({ embed: t.data }))
    .catch(() => {
        req.msg.channel.send(
        `${req.args} couldn't found at discord.js documentation.`
        );
    });
})

discord_client.login(process.env.DC_TOKEN)