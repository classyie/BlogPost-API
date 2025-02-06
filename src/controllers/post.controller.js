import Post from "../models/post.model.js";
import User from "../models/users.model.js";
import mongoose from "mongoose";

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
  const { title, content } = req.body;
  const user = req.user;
  if (!title || !content) {
    return res.status(400).send({ message: "Title and content are required." });
  }
  try {
    const newPost = new Post({ title, content, author: user._id });
    await newPost.save();
    res.status(201).send({ message: "Post created successfully", post: newPost });
  }
  catch (error) {
    console.error("Error creating post:", error.message);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

export const updatePost = async (req, res) => {
  const id = req.params.id;  // Use req.params.id directly
  const { title, content } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Post ID." });
  }

  if (!title && !content) {
    return res.status(400).send({ message: "Title or content is required." });
  }

  const user = req.user;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).send({ message: "Post not found." });
    }
    if (post.author.toString() !== user._id.toString()) {
      return res.status(403).send({ message: "You are not authorized to update this post." });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $set: { ...(title && { title }), ...(content && { content }) } },
      { new: true }
    );

    res.status(200).send({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    console.error("Error updating post:", error.message);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};


export const deletePost = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid Post ID." });
  }
  const user = req.user;
  const post = await Post.findById(id);

  if (!post) {
    return res.status(404).send({ message: "Post not found." });
  }
  if (post.author.toString()!== user._id.toString()) {
    return res.status(403).send({ message: "You are not authorized to delete this post." });
  }
  const deletedPost = await Post.deleteOne(post);
  res.status(200).send({ message: "Post deleted successfully", post: deletedPost });
}