var validator = require('validator');
var empty = require('is-empty');

module.exports = {
  validate: args => {
    let username, email, password, res = [];
    username = empty(args.username) ? '' : args.username;
    email = empty(args.email) ? '' : args.email;
    password = empty(args.password) ? '' : args.password;

    if (validator.isEmpty(username, { ignore_whitespace: true }))
      res.push('Username is required');

    if (validator.isEmpty(email, { ignore_whitespace: true }))
      res.push('Email is required');

    if (validator.isEmpty(password, { ignore_whitespace: true }))
      res.push('Password is required');

    if(res.length > 0)
    	return JSON.stringify(res);

    if (!validator.isAlphanumeric(username))
      res.push('Only alpha numeric letters are allowed in username field');

    if (!validator.isEmail(email))
      res.push('Please enter a valid email');

    return res.length > 0 ? JSON.stringify(res) : false;
  }
}