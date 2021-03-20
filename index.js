const axios = require("axios");

const { Handler } = require("c-installer");

const commands = new Handler();

const docs = async (req) => {
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
};

commands.loadCommand(docs);

commands.login();
