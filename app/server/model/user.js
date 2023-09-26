const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        id: String,
        pw: String,
    },
    { collection: 'users' },
);

const User = mongoose.model('User', userSchema);

module.exports = { User };
