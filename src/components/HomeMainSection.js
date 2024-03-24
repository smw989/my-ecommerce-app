import React, { useState, useEffect } from 'react';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  const pickRandomReviews = () => {
    const shuffled = [...reviews].sort(() => 0.5 - Math.random());
    setRandomReviews(shuffled.slice(0, 2));
  };

  useEffect(() => {
    pickRandomReviews();
  }, []);

  return (
    <main>
      <section>
        <h1>About Us</h1>
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction</p>
        <button>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.customerName}</h3>
            <p>"{review.reviewContent}"</p>
            <div className="star-rating">
              {'★'.repeat(review.stars)}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;