import User from "../models/User.js";

export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "your order has been placed",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "your order has not been placed try again",
    });
    console.log(err);
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "your order has been updated",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
    console.log(err);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "your order has been deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
    console.log(err);
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const User = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "your order is successfull",
      data: User,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
    console.log(err);
  }
};

export const getAllUser = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const Users = await User.find({})
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      message: "your orders",
      count: Users.length,
      data: Users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
    console.log(err);
  }
};
