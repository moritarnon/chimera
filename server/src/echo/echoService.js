const echoSchema = require("./echoSchema");
const mongoose = require('mongoose');

const Echo = mongoose.model(echoSchema);

module.exports = {
    insert: (value) => {
        return Echo.create({text: value.text});
    },
    getAll: () => {
        return Echo.find();
    }
};