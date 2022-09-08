const mongoose = require('mongoose');

const postShema = mongoose.Schema({
    userId: { type: String, required: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: String, required: true },
    dislike: { type: Number, required: true },
    imageUrl: { type: Number, required: true },
    usersLiked: { type: Array, default: [0], required: true },
    usersDisliked: { type: Array, default: [0], required: true }
});

module.exports = mongoose.model('Sauce', sauceSchema);