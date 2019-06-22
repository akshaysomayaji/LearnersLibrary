var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var SubscriberesSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: { type: String },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: false
    },
    active: {
        type: Boolean, default: true,
        required: true
    },
    addedOn: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "Subscriberes" });


var SubscriberesPasswordSchema = new Schema({
    password: {
        type: String, match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*~`&quot;;(){}^+-=<>#|\,''_?&.]{8,}/,
        required: true
    },
    userid: {
        type: String,
        required: false
    },
    changePassword: {
        type: Boolean, default: false,
        required: true
    },
    active: {
        type: Boolean, default: true,
        required: true
    },
    addedOn: {
        type: Date, default: Date.now(),
        required: true
    },
}, { collection: "SubscriberesPassword" });

mongoose.model('SubscriberesSchema', SubscriberesSchema);
mongoose.model('SubscriberesPasswordSchema', SubscriberesPasswordSchema);