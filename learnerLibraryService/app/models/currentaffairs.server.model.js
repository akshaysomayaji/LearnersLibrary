var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var CurrentAffairSchema = new Schema({
    date: { type: Date, required: true },
    type: { type: string, required: true },
    details: { type: String, required: true },
    active: { type: Boolean, required: true, default: true },
    addedOn: { type: Date, default: Date.now(), required: true },
    active: { type: String, required: true, default: true },
}, { name: "currentAffairCollection" });

mongoose.model('CurrentAffairSchema', CurrentAffairSchema);