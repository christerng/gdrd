var client = require('../redis');
var express = require('express');
var router = express.Router();

async function getAllQueueLengths(req, res, next) {
  await res.json(
    {
      1: await client.get('queue:1:length'),
      2: await client.get('queue:2:length'),
      3: await client.get('queue:3:length'),
      4: await client.get('queue:4:length'),
      5: await client.get('queue:5:length'),
    }
  )
}

async function getOneQueueLength(req, res, next) {
  const queue = req.params.queue;
  res.json({ 'length': await client.get('queue:' + queue + ':length') });
}

router.get('/', getAllQueueLengths);
router.get('/:queue', getOneQueueLength)

module.exports = router;