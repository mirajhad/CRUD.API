const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(helmet());
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
};
