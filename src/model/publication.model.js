import { Schema, Types, model } from 'mongoose';

const publicationSchema = new Schema({
    title: String,
    content: String,
    authorId: {
        type: Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true,
});

export const PublicationModel = model('Publication', publicationSchema);

