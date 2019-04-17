var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var blogSchema = new Schema({
    blogTitle: {
        type: String,
        required: true
    },
    blogBody: {
        type: String,
        required: true
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
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createdDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: 'blog_collection' });


mongoose.model('blogSchema', blogSchema);
