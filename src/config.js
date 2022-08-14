const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    token: process.env.TOKEN  || "",
    clientId: process.env.CLIENT || '',
    guildId: process.env.GUILD || ''
}