var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var notificationDetailsSchema = new Schema({
    notificationId: { type: String, unique: true, required: true, unique: true },
    notificationHeading: { type: String, required: true },
    notificationType: { type: String, required: true },
    notificationName: { type: String, required: true },
    notificationDetails: { type: String, required: true },
    notificationPostedDate: { type: Date, required: true },
    startDateforApply: { type: Date, required: false },
    lastDateforApply: { type: Date, required: false, },
    examDate: { type: Date, required: false },
    notificationReferenceLink: { type: String, required: false },
    addedOn: { type: Date, default: Date.now(), required: true },
    active: { type: String, required: true, default: true },
}, { collection: "notificationDetailsCollection" });

notificationDetailsSchema.methods.getnotificationid = function () {
    this.notificationId = new Date().getTime().toString();
}

mongoose.model("notificationDetails", notificationDetailsSchema);