import mongoose,{Schema} from "mongoose";
const postSchema = new Schema({
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    imagevedio: {
      type: String,
      required: true
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like'
    }],

    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }]

  }, 
  {
    timestamps: true
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;