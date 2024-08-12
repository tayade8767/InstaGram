import { v2 as cloudinary } from 'cloudinary';

import { unlinkSync } from 'fs';




cloudinary.config({ 
    cloud_name: "dvosf7ajl", 
    api_key: 821293723233931, 
    api_secret: "MiDvYe6DnYAn5kO83XQRluD1NfI"            // Click 'View Credentials' below to copy your API secret
});



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, { 
            resource_type: 'auto' ,
            resource_type: 'auto',
            max_file_size: 500000000 // 50MB
        });

        console.log("File has been uploaded successfully", response.url);

        unlinkSync(localFilePath);
        return response;

    } catch (error) {
        console.error("Error during Cloudinary upload:", error);
        if (localFilePath) {
            unlinkSync(localFilePath);
        }
        return null;
    }
}


export default uploadOnCloudinary;
















// (async function() {

//     // Configuration
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();