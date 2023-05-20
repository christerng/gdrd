var redis = require('redis');

var client = redis.createClient(
    {
        url: process.env.REDIS_URL || 'localhost:6379',
        socket: {
            tls: true,
            rejectUnauthorized: true,
        }
    });

client.connect();

client.set('queue:1:length', 0);
client.set('queue:2:length', 0);
client.set('queue:3:length', 0);
client.set('queue:4:length', 0);
client.set('queue:5:length', 0);

client.set('queue:1:volume', 10);
client.set('queue:2:volume', 20);
client.set('queue:3:volume', 30);
client.set('queue:4:volume', 40);
client.set('queue:5:volume', 50);

module.exports = client;
