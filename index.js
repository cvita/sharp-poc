const sharp = require('sharp');
const axios = require('axios');

const fetchImage = async (imageUrl) => {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        return Buffer.from(response.data, 'binary');
    } catch (error) {
        throw error;
    }
};

const processImage = async (imageUrl, cropRegions, outputPath) => {
    try {
        const inputBuffer = await fetchImage(imageUrl);
        await sharp(inputBuffer).extract(cropRegions).toFile(outputPath);
        console.log(`Processed image! See ${outputPath}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Filestack: https://cdn.filestackcontent.com/ALjVIPyY5SBCdSTP1630Sz/rotate=deg:exif/crop=dim:[0,171,1024,683]/auto_image/compress/%22https://staging.compass.com/m/15/0f698adf-a7e5-4abd-b284-842076c2a053/origin.png%22
const example1Src = 'https://staging.compass.com/m/15/0f698adf-a7e5-4abd-b284-842076c2a053/origin.png';
const example1Crop = { left: 0, top: 171, width: 1024, height: 683 };

// Filestack: https://cdn.filestackcontent.com/ALjVIPyY5SBCdSTP1630Sz/rotate=deg:exif/crop=dim:[0,0,2621,1747]/output=format:png,density:500/auto_image/compress/%22https://www.compass.com/m/0/4c41c700-8fd4-4b04-90ce-95dcddc23894/origin.jpg%22
const example2Src = 'https://www.compass.com/m/0/4c41c700-8fd4-4b04-90ce-95dcddc23894/origin.jpg';
const example2Crop = { left: 0, top: 0, width: 2621, height: 1747 };

processImage(example1Src, example1Crop, 'example1Cropped.jpg');
processImage(example2Src, example2Crop, 'example2Cropped.jpg');
