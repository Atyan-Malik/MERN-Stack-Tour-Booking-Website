// Calculate Average Rating Utility
export const calculateAvgRating = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return {
      avgRating: 0,
      totalRating: 0,
    };
  }

  // Sum all ratings
  const total = reviews.reduce((acc, item) => acc + (item.rating || 0), 0);

  // Calculate average
  const avg = total / reviews.length;

  return {
    avgRating: parseFloat(avg.toFixed(1)), // one decimal point (e.g. 4.3)
    totalRating: reviews.length,
  };
};
