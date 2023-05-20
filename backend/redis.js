var redis = require('redis');

var client = redis.createClient(
    {
        url: process.env.REDIS_TLS_URL || 'localhost:6379',
        socket: {
            tls: true,
            rejectUnauthorized: false,
        }
    });

client.on('error', e => console.log(e));

client.connect();

client.setNX('queue:1:length', 0);
client.setNX('queue:2:length', 0);
client.setNX('queue:3:length', 0);
client.setNX('queue:4:length', 0);
client.setNX('queue:5:length', 0);

client.setNX('queue:1:volume', 10);
client.setNX('queue:2:volume', 20);
client.setNX('queue:3:volume', 30);
client.setNX('queue:4:volume', 40);
client.setNX('queue:5:volume', 50);

module.exports = client;
