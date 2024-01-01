import React from "react";

export default function Testimonial({ img, username, score, body }) {
  return (
    <>
      <div className="testimonial-item">
        <div className="d-flex align-items-center mb-3">
          <img className="testimonial-item__img" src={img} alt="" />
          <div className="ml-3">
            <h4>{username}</h4>
            <span className="testimonial-item__score">
              {(score >= 4 && "Good") ||
                ((score <= 3) & (score >= 2) && "Average") ||
                (score <= 1 && "Bad")}
            </span>
          </div>
        </div>
        <p className="m-0">{body}</p>

        <hr />
      </div>
    </>
  );
}
