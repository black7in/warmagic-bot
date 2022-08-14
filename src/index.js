const client = require('./app')
const config = require('./config')

const main =()=>{
    client.login(config.token);
};

main();
