const Register = require("../models/User/Registration");

exports.createPost = async (req, res) => {
  const newRegister = new Register(req.body);

  try {
    const savedRegister = await newRegister.save();
    if (savedRegister) res.status(200).send(newRegister);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const post = await Register.find();
    res.status(200).send(post);
    return;
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPaginated = async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit

    
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updatePost = await Register.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).send(updatePost);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletePost = await Register.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Post Deleted Sucessfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};
