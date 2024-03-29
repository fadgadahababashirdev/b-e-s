const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const activities = require("./routes/activitiesRoute")

// dotenv
require('dotenv').config();

// app usages
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({extended:false}))

// app routes

app.use("/" , activities)



app.get('/', (req, res) => res.send('app is running successfully'));
app.get('/*', (req, res) => res.send('the route could not be found'));
// connection

const connection = async () => {
  try {
    await mongoose.connect(process.env.db);
    console.log('app connected successfully');

    app.listen(process.env.port, () =>
      console.log(`app running on http://localhost:${process.env.port}`)
    );
  } catch (error) {
    console.log('the db could not be connected', error);
  }
};

connection();
