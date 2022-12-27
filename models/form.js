const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    post_title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;