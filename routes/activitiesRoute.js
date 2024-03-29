const express = require("express")
const upload= require("../helpers/multer")
const {activity ,getActivities , updateActivity , singleActivity ,deleteSingle}= require("../controllers/whatWeDoController")

const activities = express.Router()

activities.post("/activity",upload.single("image"),activity)
activities.get("/activity",getActivities)
activities.get("/activity/:id",singleActivity)
activities.put("/activity/:id",upload.single("image") , updateActivity)
activities.delete("/activity/:id",deleteSingle)



module.exports = activities