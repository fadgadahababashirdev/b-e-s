const { error } = require("console");
const multer = require("multer")
const path = require("path")



const checkFile =  multer({
    storage:multer.diskStorage({}) , 
    fileFilter:(req,file , cb)=>{
        const extension = path.extname(file.originalname).toLowerCase()
        const alloweExtensions = [".jpg" , ".gif" , ".svg" , ".png" , ".jpg"];

        if(!alloweExtensions.includes(extension)){
            cb(new Error("unsupported file format" , false))

            
        }
        cb(null , true)
    }
})

module.exports = checkFile