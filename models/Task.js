import mongoose from 'mongoose'
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    content: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    create_At: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Task || mongoose.model('Task', TaskSchema)