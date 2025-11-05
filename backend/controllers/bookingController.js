import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  console.log(newBooking);
  try {
    const saveBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      data: saveBooking,
      message: "Tour has been booked successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal Server error",
    });
  }
};
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.findById(id);
    res.status(200).json({
      success: true,
      data: book,
      message: "successfull",
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
    console.log(err);
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res.status(200).json({
      success: true,
      data: books,
      message: "successfull",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
