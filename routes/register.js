var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const tbl_users = require('../schemas/tbl_users');
const hashHelper = require('../helpers/hash_algo');
const regValidation = require('../validation/register');

/* GET home page. */
router.post('/signup', async function(req, res, next) {
  try {
    let body = req.body,
      hsh, result, valid;

    errors = regValidation.validate(body);
    if (errors)
      throw errors;

    result = await tbl_users.findOne({ '$or': [{ username: body.username }, { email: body.email }] });
    if (result)
      throw 'Username or email alredy exists';

    hsh = await hashHelper.createHash(body.password);

    await tbl_users.create({
      username: body.username,
      email: body.email,
      password: hsh
    });

    res.status(201).json({
      status: true,
      result: []
    });
  } catch (e) {
    next(createError(406, e));
  }
});

module.exports = router;