const mongoose = require('mongoose');

const user = 'User';

const UserSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    password: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"]},
    roles: [{type: String}], //TODO index to another table

    avatar: String,

    salt: String
}, {timestamps: true});

mongoose.model(user, UserSchema);

module.exports = user;


