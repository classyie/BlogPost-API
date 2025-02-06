import Post from "../models/post.model.js";
import User from "../models/users.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    return { success: false, message: "Internal Server Error" };
  }
};

export const createPost = async (req, res) => {
    const {title, content} = req.body;
    const user = req.user;
    if(!title || !content) {
        return res.status(400).send({ message: "Title and content are required." });
    }
    try{
        const newPost = new Post({ title, content, author: user._id });
        await newPost.save();
        res.status(201).send({message: "Post created successfully", post: newPost});
    }
    catch(error){
        console.error("Error creating post:", error.message);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};
