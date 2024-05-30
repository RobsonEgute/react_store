const mongoose = require('mongoose');
const UserFxn = () => {
/*
Registration Data Needed
- First name(s)
- Last name(s)
- Surname 
- Username (must be unique)
- phone number (must be unique)
- date of birth
- email address (must be unique)
- street name
- post code
- county/region
- country
*/

const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    surname: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    phonenumber: {type: Number, required: true, unique: true},
    dob: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    street: {type: String, required: true},
    houseNumber: {type: String},
    postcode: {type: String, required: true},
    county: {type: String, required: true},
    country: {type: String, required: true},
});

const User = mongoose.model('User', userSchema);

}

module.exports = {
    UserFxn
}