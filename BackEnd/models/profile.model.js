import mongoose,{Schema} from "mongoose";


const profileSchema = new Schema({

    website:{
        String,
        required: false
    },
    gender:{
        type: String,
        enum: ['male', 'female', 'other'],
        required: false,
    },
    
    profileImage: {
        String,
        required: false
    },
    bio: {
        String,
        required: false
    },

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