import mongoose, { Schema } from 'mongoose';
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const likeSchema = new Schema(
    {
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
        comment: {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
        likedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    {
      timestamps: true,
    }
)

commentSchema.plugin(mongooseAggregatePaginate)

export const Like = mongoose.model('Like',likeSchema);