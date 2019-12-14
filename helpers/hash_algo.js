/**
  * To hash, compare registering users's passwords.
  *
 */

const bcrypt = require('bcrypt');
const saltRounds = 15;

module.exports = {
	createHash : (pwd,cb) => {
		return bcrypt.hash(pwd, saltRounds,cb);
	}
}