import { Schema, Types, model } from 'mongoose';

const userSchema = new Schema({
    username: String,
    email: String,
    publications: {
        type: Types.ObjectId,
        ref: 'Publication',
    }
});

export const UserModel = model('User', userSchema);