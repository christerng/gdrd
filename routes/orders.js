var client = require('../redis');
var express = require('express');
var router = express.Router();

async function createOrder(req, res, next) {
    const queue = req.params.queue;
    const order = req.params.order;
    const volume = req.params.volume;

    // line gets longer
    await client.incr('queue:' + queue + ':length');

    // add order to DB
    await client.set('queue:' + queue + ':order:' + order, volume);

    res.send();
}

async function deleteOrder(req, res, next) {
    const queue = req.params.queue;
    const order = req.params.order;

    // line gets shorter
    await client.decrBy(
        'queue:' + queue + ':length',
        Math.min(1, await client.get('queue:' + queue + ':length'))
    );
    // volume reduced
    const volume = await client.get('queue:' + queue + ':order:' + order);
    await client.decrBy(
        'queue:' + queue + ':volume',
        Math.min(volume, await client.get('queue:' + queue + ':order:' + order))
    );

    // remove order from DB
    await client.del('queue:' + queue + ':order:' + order);

    res.send();
}

router.post('/queue/:queue/order/:order/volume/:volume', createOrder);
router.delete('/queue/:queue/order/:order', deleteOrder);

module.exports = router;