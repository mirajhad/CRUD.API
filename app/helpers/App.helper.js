const bcrypt = require('bcrypt');

module.exports = {
    hashPassword: function(password) {
        return bcrypt.hashSync(password, 10);
    },
    comparePassword: function(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword);
    }
}
