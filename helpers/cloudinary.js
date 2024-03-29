const cloudinary = require("cloudinary")

require("dotenv").config()

  cloudinary.config({
     
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
  })

    


const uploadFile = async(file ,res)=>{
    try {
        const toClocoud = await cloudinary.uploader.upload(file.path)
        return toClocoud 
    } catch (error) {
        res.status(400).json({status:"failed" , message:error.message})
    }
}


module.exports = uploadFile