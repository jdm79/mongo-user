const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const UserSchema = new Schema({
    name: String
});

// the first parameter of the model is the name of the collection in our MongoDB
// if it's not already made, it will automatically make it for us - IMPORTANT TO KNOW!
const User = mongoose.model('user', UserSchema);

module.exports = User;