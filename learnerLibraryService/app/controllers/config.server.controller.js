var svgCaptcha = require('svg-captcha');

exports.getcaptcha = function (req, res, next) {
    try {
        var captcha = svgCaptcha.create();
        req.session.save(function () {
            req.session.captcha = captcha.text;
            console.log(req.session);
            res.send({ success: true, msg: "", data: captcha.data, text: captcha.text });
        });        
    }
    catch (err) {
        res.send({ 'data': {}, success: false, msg: notification.getConfig_notification_message('Branch000'), err: err });
    }
}