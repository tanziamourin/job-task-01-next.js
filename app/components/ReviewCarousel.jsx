"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewCarousel() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
 const fetchedReviews = [
  {
    name: "Alice Johnson",
    avatar: "https://images.unsplash.com/photo-1731579088434-75f5b4b7674e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFsaWNlJTIwSm9obnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    comment: "Amazing product! Loved the quality and service.",
  },
  {
    name: "Mark Smith",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200",
    rating: 4,
    comment: "Very good, but shipping took a bit longer than expected.",
  },
  {
    name: "Sophia Lee",
    avatar: "https://images.unsplash.com/photo-1698234598525-218d7e544a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFsaWNlJTIwSm9obnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    comment: "Exceeded my expectations! Highly recommend.",
  },
  {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1640465978467-fa011a5dfb0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFsaWNlJTIwSm9obnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4,
    comment: "Great quality but packaging could improve.",
  },
];


    setReviews(fetchedReviews);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!reviews.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  if (!reviews.length)
    return <p className="mt-10 text-center">Loading reviews...</p>;

  return (
    <section className="py-16">
      <h2 className="mb-10 text-3xl font-bold text-center text-gray-900 md:text-5xl dark:text-white">
        Customer Reviews
      </h2>

      <div className="w-full max-w-6xl pb-10 mx-auto overflow-hidden ">
        {/* Slide Container */}
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {reviews.map((r, idx) => (
            <div key={idx} className="flex-shrink-0 w-full ">
              <ReviewCard
              className="pb-16"
                name={r.name}
                avatar={r.avatar}
                rating={r.rating}
                comment={r.comment}
              />
            </div>
          ))}
        </div>

        {/* Optional: Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-pink-500" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
