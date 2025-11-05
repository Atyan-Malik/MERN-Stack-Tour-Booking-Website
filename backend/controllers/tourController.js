import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "your order has been placed",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "your order has not been placed try again",
    });
    console.log(err);
  }
};

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedtour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "your order has been updated",
      data: updatedtour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
    console.log(err);
  }
};

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

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

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "your order is successfull",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
    console.log(err);
  }
};

export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      message: "your orders",
      count: tours.length,
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
    console.log(err);
  }
};

export const getTourBySearch = async (req, res) => {
  console.log("✅ getTourBySearch called with:", req.query);
  try {
    // Extract and validate query parameters
    const { city, distance, maxGroupSize } = req.query;

    // Build dynamic query object
    const query = {};

    if (city) {
      // Case-insensitive partial match for city
      query.city = new RegExp(city, "i");
    }

    if (distance) {
      query.distance = { $gte: parseInt(distance) };
    }

    if (maxGroupSize) {
      query.maxGroupSize = { $gte: parseInt(maxGroupSize) };
    }

    // Find tours based on dynamic filters
    const tours = await Tour.find(query).populate("reviews");

    // If no tours found
    if (!tours.length) {
      return res.status(404).json({
        success: false,
        message: "No tours found matching your criteria",
      });
    }

    // Send success response
    res.status(200).json({
      success: true,
      message: "Tours matching your search",
      count: tours.length,
      data: tours,
    });
  } catch (err) {
    console.error("Error in getTourBySearch:", err);
    res.status(500).json({
      success: false,
      message: "Server error while searching for tours",
    });
  }
};

export const getFeatureTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({ featured: true }).limit(8);
    res.status(200).json({
      success: true,
      message: "your orders",
      count: tours.length,
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
    console.log(err);
  }
};

export const getTourCount = async (req, res) => {
  try {
    const count = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: count,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data",
    });
  }
};
