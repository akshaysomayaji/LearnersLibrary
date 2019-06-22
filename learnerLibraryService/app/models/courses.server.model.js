var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var courselist = new Schema({
    courseName: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean, default: true,
        required: true
    },
    addedOn: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "curse_list" });

var courses = new Schema({
    courseNameId: {
        type: String,
        required: true,
    },
    lessonHeadding: {
        type: String,
        required: true,
    },
    lessonDetails: {
        type: String,
        required: true,
    },
    addedOn: { type: Date, default: Date.now(), required: true },
    active: { type: String, required: true, default: true },
}, { collection: "couses_details" });



mongoose.model('courselist', courselist);
mongoose.model('courselessons', course_lessons);