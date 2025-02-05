import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userAuth from './routes/user.route.js'
import postRoute from './routes/post.route.js';
import connectDB from './lib/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cookieParser());
app.use('/auth', userAuth);
app.use('/post', postRoute)
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});