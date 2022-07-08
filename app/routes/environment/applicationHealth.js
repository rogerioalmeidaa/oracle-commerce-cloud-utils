const express = require('express');
const so = require('os');
const router = new express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/version', (_,res) => {
    return res
    .status(200)
    .json({ 
        host_node_version: process.version,
        host_system: so.type(),
        host_system_version: so.release(),
    })
    .end();
});

router.get('/ping', (_, res) => {
    return res
    .status(200)
    .json({msg: 'ok, received request !'})
    .end();
});
  
module.exports = router;
