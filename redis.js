var redis = require('redis');

var client = redis.createClient(
    {
        url: process.env.REDIS_TLS_URL || 'redis://localhost:6379',
        socket: {
            tls: process.env.REDIS_TLS_URL ? true : false,
            rejectUnauthorized: false,
        },
    });
client.on('error', e => console.log(e));

client.connect();

client.set('queue:1:length', 0, { NX: true });
client.set('queue:2:length', 0, { NX: true });
client.set('queue:3:length', 0, { NX: true });
client.set('queue:4:length', 0, { NX: true });
client.set('queue:5:length', 0, { NX: true });

client.set('queue:1:volume', 10, { NX: true });
client.set('queue:2:volume', 20, { NX: true });
client.set('queue:3:volume', 30, { NX: true });
client.set('queue:4:volume', 40, { NX: true });
client.set('queue:5:volume', 50, { NX: true });

module.exports = client;