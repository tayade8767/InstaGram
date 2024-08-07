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

}, {
  timestamps: true
});


// postSchema.methods.addLike = function(userId) {
//   if (!this.likes.includes(userId)) {
//     this.likes.push(userId);
//   }
//   return this.save();
// };

// postSchema.methods.removeLike = function(userId) {
//   this.likes = this.likes.filter(id => id.toString() !== userId.toString());
//   return this.save();
// };

const Post = mongoose.model('Post', postSchema);

export default Post;