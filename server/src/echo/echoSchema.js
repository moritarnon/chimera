const mongoose = require('mongoose');

const echo = 'Echo';

const EchoSchema = new mongoose.Schema({
    text: {type: String}
}, {timestamps: true});

mongoose.model(echo, EchoSchema);

module.exports = echo;

