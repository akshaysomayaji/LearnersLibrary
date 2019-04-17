var notification = require('../../app/controllers/notification.server.controller');
module.exports = function (app) {
    app.route('/api/notification/get').get(notification.getNotification);
    app.route('/api/notification/save').post(notification.addNotification);
    app.route('/api/notification/pagination/get').get(notification.getPaginationArray);
}