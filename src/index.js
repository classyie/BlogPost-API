import express from 'express';
import dotenv from 'dotenv';
import userAuth from './routes/user.route.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use('/auth', userAuth);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});