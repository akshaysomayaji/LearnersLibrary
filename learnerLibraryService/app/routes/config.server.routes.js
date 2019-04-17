var config = require('../../app/controllers/config.server.controller');
module.exports = function (app) {
    app.route('/api/captcha/get').get(config.getcaptcha);
}