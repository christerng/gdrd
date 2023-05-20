var client = require('../redis');
var express = require('express');
var router = express.Router();

async function getAllQueueVolumes(req, res, next) {
    res.json(
        {
            1: await client.get('queue:1:volume'),
            2: await client.get('queue:2:volume'),
            3: await client.get('queue:3:volume'),
            4: await client.get('queue:4:volume'),
            5: await client.get('queue:5:volume'),
        }
    )
}

async function getOneQueueVolume(req, res, next) {
    const queue = req.params.queue;
    res.json({ 'volume': await client.get('queue:' + queue + ':volume') });
}

router.get('/', getAllQueueVolumes);
router.get('/:queue', getOneQueueVolume);

module.exports = router;