import { useState } from "react";
import { Star } from "lucide-react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 5,
      comment: "Amazing masterclass! Learned so much in just a few hours.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Great content and easy to follow. Highly recommend!",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment || newReview.rating === 0) return;

    setReviews([...reviews, newReview]);
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className=" mx-auto mt-5 bg-white ">
      {/* <h2 className="text-3xl font-bold mb-6 text-center">Reviews</h2> */}

      {/* Existing Reviews */}
      <div className="space-y-4 mb-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold mr-3">
                {review.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-semibold">{review.name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill={i < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Add New Review */}
      <form
        onSubmit={handleSubmit}
        className="border-t pt-6 space-y-4 transition-all"
      >
        <h3 className="text-xl font-semibold">Write a Review</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.name}
          onChange={(e) =>
            setNewReview({ ...newReview, name: e.target.value })
          }
          className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Your Review"
          rows={3}
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
          className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Star Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() =>
                setNewReview({ ...newReview, rating: i + 1 })
              }
            >
              <Star
                size={20}
                className={`transition ${
                  i < newReview.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill={i < newReview.rating ? "currentColor" : "none"}
              />
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
