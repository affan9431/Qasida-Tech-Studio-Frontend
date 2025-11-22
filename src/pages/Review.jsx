import { useState } from "react";

export default function Review() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitReview = () => {
    // For now, log it
    console.log({ rating, feedback });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">We Value Your Feedback!</h1>
      {submitted ? (
        <p className="text-green-500 text-lg">Thanks for your review! 🙏</p>
      ) : (
        <div className="w-full max-w-md space-y-6">
          {/* Rating */}
          <div>
            <p className="mb-2 font-semibold">Rate us:</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    star <= rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div>
            <p className="mb-2 font-semibold">Your Feedback:</p>
            <textarea
              rows={4}
              className="w-full p-3 border rounded-lg border-border bg-card/50 text-foreground"
              placeholder="Write something..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            onClick={submitReview}
            className="bg-[#ECF5CC] px-8 py-4 rounded-full text-[#474747] text-sm md:text-base font-medium hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            Submit Review
          </button>
        </div>
      )}
    </div>
  );
}
