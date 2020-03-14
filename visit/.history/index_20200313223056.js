const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    // Docker automatically redirects to redis-server container
    host: 'redis-server', // Without Docker you write here an url like https://my-redis-server.com
    port: 6379
});
client.set('visit', 0);

app.get('/', (req, res) => {
    client.get('visit', (err, visit) => {
        res.send('Number of visit is ' + visit);
        client.set('visit', parseInt(visit) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});