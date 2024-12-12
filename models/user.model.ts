import mongoose, { Schema } from 'mongoose';



const dataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


const User = mongoose.model('Users', dataSchema);
export default User;
