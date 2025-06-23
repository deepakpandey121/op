import React from "react";
import "./Review.css";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophia Clark",
      time: "2 months ago",
      comment: "I hired a carpenter through HandyConnect to build custom shelves for my living room. The process was seamless, and the carpenter did an excellent job. I'm very happy with the result!",
      likes: 12,
      dislikes: 2
    },
    {
      id: 2,
      name: "Ethan Miller",
      time: "3 months ago",
      comment: "The plumber I found on HandyConnect was professional and efficient. He fixed a leaky faucet quickly and at a reasonable price. I would use this service again.",
      likes: 8,
      dislikes: 1
    },
    {
      id: 3,
      name: "Olivia Davis",
      time: "4 months ago",
      comment: "I needed a painter for my apartment, and HandyConnect connected me with a fantastic professional. The painting was done beautifully, and the painter was very courteous.",
      likes: 15,
      dislikes: 3
    }
  ];

  return (
    <div className="reviews-container" id="rateing">
      <h1>What Our Customers Say</h1>
      
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <h2>{review.name}</h2>
              <span className="review-time">{review.time}</span>
            </div>
            
            <div className="review-divider"></div>
            
            <p className="review-comment">{review.comment}</p>
            
            <div className="review-footer">
              <span className="likes">{review.likes} 👍</span>
              <span className="dislikes">{review.dislikes} 👎</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;