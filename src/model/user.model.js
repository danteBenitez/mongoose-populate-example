import { Schema, Types, model } from 'mongoose';
import autoPopulate from 'mongoose-autopopulate';

const userSchema = new Schema({
    username: String,
    email: String,
    publications: [{
        type: Types.ObjectId,
        ref: 'Publication',
        default: [],
        autopopulate: {
            maxDepth: 1
        }
    }]
});

userSchema.plugin(autoPopulate);

export const UserModel = model('User', userSchema);