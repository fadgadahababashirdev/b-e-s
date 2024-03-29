const activities = require('../models/whatWeDo');
const uploadFile = require('../helpers/cloudinary');

// creating an activity

const activity = async (req, res) => {
  try {
    const filee = await uploadFile(req.file, res);
    const newActivity = await activities.create({
      image: filee.secure_url,
      name: req.body.name,
      nameTwo: req.body.nameTwo,
      descriptionOne: req.body.descriptionOne,
      descriptionTwo: req.body.descriptionTwo,
    });
    res.status(201).json({ status: 'success', newActivity });
  } catch (error) {
    res
      .status(400)
      .json({ status: 'activity not created', message: error.message });
  }
};

const getActivities = async (req, res) => {
  try {
    const getActity = await activities.find();
    res.status(200).json({ status: 'success', getActity });
  } catch (error) {
    res.status(400).json({ status: 'failed to fetch', message: error.message });
  }
};

const updateActivity = async (req, res) => {
  try {
    if (req.file) {
      const fileeUpdate = await uploadFile(req.file, res);

      const updateeFile = await activities.findByIdAndUpdate(req.params.id, {
        image: fileeUpdate.secure_url,
        name: req.body.name,
        nameTwo: req.body.nameTwo,
        descriptionOne: req.body.descriptionOne,
        descriptionTwo: req.body.descriptionTwo,
      });
      res.status(200).json({ status: 'success', updateeFile });
    } else {
      const updateeFile = await activities.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        nameTwo: req.body.nameTwo,
        descriptionOne: req.body.descriptionOne,
        descriptionTwo: req.body.descriptionTwo,
      });
      res.status(200).json({ status: 'success', updateeFile });
    }
  } catch (error) {
    res.status(400).json({ status: 'failed', message: error.message });
  }
};

const singleActivity = async (req, res) => {
  try {
    const singleActivity = await activities.findById(req.params.id);
    res.status(200).json({ status: 'failed', singleActivity });
  } catch (error) {
    res.status(400).json({ status: 'uknown id', message: error.message });
  }
};

const deleteSingle = async(req,res)=>{
    try {
        const deleteSingle = await activities.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"success"})
    } catch (error) {
        
        res.status(500).json({status:"failed" , message:error.message})
    }
}
module.exports = { activity, getActivities, updateActivity, singleActivity ,deleteSingle};
