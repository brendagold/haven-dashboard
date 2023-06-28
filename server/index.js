import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';


import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';

dotenv.config();

//const upload = multer();
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
// for parsing application/json
//app.use(bodyParser.json()); 

// for parsing application/xwww-
//app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
// app.use(upload.array()); 
// app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Haven!',
  });
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();