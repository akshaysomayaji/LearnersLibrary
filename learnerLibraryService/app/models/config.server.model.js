var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var tagsSchema = new Schema({
    tagname: {
        type: String,
        required: true
    },
    active: {
        type: Boolean, default: true,
        required: true
    },
    addedOn: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: 'tags_collection' });


mongoose.model('tagsSchema', tagsSchema);




