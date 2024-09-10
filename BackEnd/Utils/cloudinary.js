import { v2 as cloudinary } from 'cloudinary';
import { unlinkSync } from 'fs';

cloudinary.config({ 
    cloud_name: "dvosf7ajl", 
    api_key: 821293723233931, 
    api_secret: "MiDvYe6DnYAn5kO83XQRluD1NfI"
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, { 
            resource_type: 'auto',
            max_file_size: 500000000 // 50MB
        });

        console.log("File has been uploaded successfully", response.url);

        unlinkSync(localFilePath); // Remove the local file after upload
        return response;

    } catch (error) {
        console.error("Error during Cloudinary upload:", error);
        if (localFilePath) {
            unlinkSync(localFilePath);
        }
        return null;
    }
};

const deleteFromCloudinary = async (publicId) => {
    try {
        if (!publicId) {
            console.log("No public ID provided for deletion");
            return null;
        }

        const result = await cloudinary.uploader.destroy(publicId);
        console.log("File has been deleted successfully", result);
        return result;
    } catch (error) {
        console.error("Error during Cloudinary deletion:", error);
        return null;
    }
};

export default { uploadOnCloudinary, deleteFromCloudinary };
