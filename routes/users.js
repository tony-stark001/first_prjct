var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    res.json({
      status: true,
      message: 'ok',
      result: [{
        username: 'Deepak'
      }]
    });
  }
  catch(e){
    next(createError(200,e));
  }
});

module.exports = router;