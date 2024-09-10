import mongoose,{Schema} from "mongoose";


const profileSchema = new Schema({
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    // followers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
    // following: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
})

export const Profile = mongoose.model('Profile', profileSchema);