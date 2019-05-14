const mongoose = require('mongoose');
const User = mongoose.model(require("./userSchema"));

const errors = {
    notFound: (input) => ({message: `User not found: ${input.name}`, code: 404}),
    exists: (input) => ({message: `User with that name already exists: ${input.name}`, code: 409})
};

module.exports = {

    register: (value) => {
        const {name, password} = value;

        const exists = User.findOne({name});

        if (exists)
            throw errors.exists(value);

        const user = {
            name,
            password,
            //TODO roles and such
        };

        return User.create(user);
    },

    login: async (value, session) => {
        const {name, password} = value;
        const user = await User.findOne({name});
        //TODO compare pwd

        if (!user)
            throw errors.notFound(value);

        session.userId = user.id;

        return user;
    },

    logout: (session) => {
        session.destroy();
        session.clearCookie('UserSession')
    }
};