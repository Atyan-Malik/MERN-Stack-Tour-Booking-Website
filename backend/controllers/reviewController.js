import Review from "../models/Review.js";
import Tour from "../models/Tour.js";

export const createReviews = async (req, res) => {
  const tourId = req.params.tourId;
  const newReviews = new Review({ ...req.body });
  try {
    const savedReviews = await newReviews.save();
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReviews._id },
    });

    console.log(savedReviews);

    res.status(200).json({
      success: true,
      data: savedReviews,
      message: "review submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "review not submitted",
    });

    console.log(error);
  }
};
