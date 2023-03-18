import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";


import TestimonialNumbers from "./Numbers";
const testimonials = [
  {
    customer: "Maryam Adegoke",
    rating: 4,
    review:
    "I've been using this fintech app for a few months now and it has made managing my finances so much easier. I love the simple interface and the ability to track my spending in real-time.",
  },
  {
    customer: "Queendoline Akpan",
    rating: 5,
    review:
      "I've been using this fintech app for a few months now and it has made managing my finances so much easier. I love the simple interface and the ability to track my spending in real-time.",
  },
  {
    customer: "Chioma Uche",
    rating: 3,
    review:
      "The application process was fast and easy, and the interest rates are much more reasonable than what I was getting with my credit cards. Thank you for providing such a great service!",
  },
];

function TestimonialSection() {
  const [reviews, setReviews] = useState(testimonials);
  const [count, setCount] = useState(0)


  
  return (
    <section className="testimonials">
    <div className="individual-testimonials">
      <p>{reviews[count].review}</p>
      <p>{reviews[count].customer}</p>
        {[...Array(5)].map((_, i) =>
          reviews[count].rating <= i ? (
            <AiOutlineStar key={i} className="non-rated" />
          ) : (
            <AiFillStar
              key={i}
              className={`${reviews[count].rating > i ? "rated" : "non-rated"}`}
            />
          )
        )}
      </div>
        <TestimonialNumbers count = {count} setCount={setCount} data={reviews}/>
    </section>
  );
}

export default TestimonialSection;
