const Imagekit = require("@imagekit/nodejs");


const imagekit = new Imagekit({
     privateKey: "private_XfBCOuZSdNXZ2F8tOonbrxx3XSw=",
})


async function uploadImage(buffer){

    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: "image.jpg",
    })

    return result;

}


module.exports = uploadImage;