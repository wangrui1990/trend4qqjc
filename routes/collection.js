/**
 * Created by wr on 2016/6/17.
 */
var express = require('express');
var router = express.Router();
var collection = require('../utils/collection');
/* GET home page. */
router.get('/', collection.index);

module.exports = router;
