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

exports.getPaginatedPosts = async (req, res) => {
  // destructure page and limit and set default values
  const { page = 1, limit = 10 } = req.query;

  try {
    // execute query with page and limit values
    const posts = await Post.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    // get total documents in the Posts collection
    const count = await Post.countDocuments();

    const totalPages = Math.ceil(count / limit);
    // return response with posts, total pages, and current page
    res.status(200).json({
      posts,
      totalPages,
      currentPage: page,
      limit
    });
  } catch (err) {
    res.status(400).send({ message: "Error Fetching the Data", error: err });
  }
};

//Read/Get A Post By Just Getting The ID
exports.getPostsByID = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update a post by ID

exports.updatePost = async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body);
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
