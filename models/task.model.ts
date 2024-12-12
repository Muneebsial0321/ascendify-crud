import mongoose, { Schema } from 'mongoose';



const dataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    userId:{
        type:String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    }
}, { timestamps: true });


const Task = mongoose.model('Tasks', dataSchema);
export default Task;
