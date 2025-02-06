
import express from 'express';
import { createPost, deletePost, getPosts, updatePost } from '../controllers/post.controller.js';
import { authMiddleware } from "../middleware/auth.middleware.js"
const route = express.Router();

route.get('/', getPosts);
route.post('/create', authMiddleware, createPost);
route.put('/update-post/:id', authMiddleware, updatePost);
route.delete('/delete-post/:id', authMiddleware, deletePost);
export default route;
