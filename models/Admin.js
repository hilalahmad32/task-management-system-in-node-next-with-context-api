import mongoose from 'mongoose'
const AdminSchema = new mongoose.Schema({
    username: {
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

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema)