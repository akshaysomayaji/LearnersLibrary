var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var mongoClient = require('mongodb').MongoClient;
var config = require('./config');

var blogSchema = new Schema({
    blogTitle: {
        type: String,
        required: [true, 'Blogger title is required']
    },
    blogBody: {
        type: String,
        required: [true, 'Blogger details is required']
    },
    blogFiles: [
        {
            blogFileName: {
                type: Blob,
                required: false
            },
            blogFileDetails: {
               type: String,
               required: false
            },
            blogFileSize: {
                type: String,
                required: false
            },
            isFilePresent: {
                type: Boolean, default: false,
            }
        }
    ],
    blogImage: {
        type: Blob,
        required: false
    },
    tagId: {
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
}, { collection: 'blog_collection' });


mongoose.model('blogSchema', blogSchema);
