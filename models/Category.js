import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
    },
    create_At: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Category || mongoose.model('Category', CategorySchema)