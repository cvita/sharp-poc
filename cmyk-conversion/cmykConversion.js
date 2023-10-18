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

const processImage = async (imageUrl, outputPath) => {
    try {
        const inputBuffer = await fetchImage(imageUrl);
        await sharp(inputBuffer).toFile('./cmyk-conversion/example1-original.jpg');
        await sharp(inputBuffer).toColorspace('cmyk').toFile('./cmyk-conversion/example1-cmyk.jpg');
        console.log(`Processed image! See ${outputPath}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

const example1Src = 'https://staging.compass.com/m/15/0f698adf-a7e5-4abd-b284-842076c2a053/origin.png';
processImage(example1Src);
