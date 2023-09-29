import { Schema, Types, model } from 'mongoose';
import autoPopulate from 'mongoose-autopopulate';

const publicationSchema = new Schema({
    title: String,
    content: String,
    authorId: {
        type: Types.ObjectId,
        ref: 'User',
        autopopulate: {
            maxDepth: 1
        }
    }
}, {
    timestamps: true,
});

publicationSchema.plugin(autoPopulate);

export const PublicationModel = model('Publication', publicationSchema);

