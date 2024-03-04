const Post = require("../models/Post");

//Create a new post

exports.createPost = async (req, res) => {
  //1. Create posts variable
  const newPost = new Post(req.body);
  //2. Save new post to MongoDB
  try {
    const savedPost = await newPost.save();
    //3. If save is successful, send back 201 status code and post body
    if (savedPost) res.status(201).send(newPost);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Read/get a new post
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).send(posts);
    return;
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update a post by ID

exports.updatePost = async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(updatePost);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Post Deleted Sucessfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

//Req = Request Res = Result
