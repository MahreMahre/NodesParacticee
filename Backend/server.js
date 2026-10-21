const app = require('./src/app');
require('dotenv').config();
const dns = require('node:dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = require('./src/db/db');

connectDB();

app.listen(3000, () => {   
    console.log('Server is running on port 3000');
 })