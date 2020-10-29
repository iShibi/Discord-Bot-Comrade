const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
    author: String,
    key: String,
    value: String,
});

const Tag = model('tag', tagSchema);
module.exports = Tag;