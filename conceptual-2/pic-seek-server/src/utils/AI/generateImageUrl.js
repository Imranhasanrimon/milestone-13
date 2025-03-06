require('dotenv').config();
const generateImageUrl = async (buffer) => {
    const formData = new FormData();
    formData.append('image', new Blob([buffer], { type: "image/jpeg" }))

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMAGE_BB_API_KEY}`, {
        method: "POST",
        body: formData,
    });

    const data = await response.json();
    return data?.data?.url;
}

module.exports = generateImageUrl;