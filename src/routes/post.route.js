
import express from 'express';
import { createPost, getPosts } from '../controllers/post.controller.js';
import { authMiddleware } from "../middleware/auth.middleware.js"
const route = express.Router();

route.get('/', getPosts);
route.post('/create', authMiddleware, createPost);
export default route;
