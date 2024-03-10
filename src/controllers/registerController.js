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
  try{
    const post = await Register.find();
    res.status(200).send(post)
    return;
  }catch(error){
    res.status(400).send(error)
  }

};
