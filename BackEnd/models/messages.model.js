import mongoose,{ Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const messagesSchema = new Schema(
    {
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        receiver: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        message: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true,
    }
);

messagesSchema.plugin(mongooseAggregatePaginate);

const Chat = mongoose.model('Chat', messagesSchema);

export default Chat;

