import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_At: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)