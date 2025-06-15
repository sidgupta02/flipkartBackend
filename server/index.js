const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//create express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());


//routes
app.use("/api/auth", require("./routes/authRoutes.js"));



//connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  })
}).catch(err =>{
  console.error('Error connecting to MongoDB:', err);
});
