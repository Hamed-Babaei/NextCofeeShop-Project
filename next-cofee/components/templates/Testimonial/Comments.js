import Testimonial from "@/components/modules/Testimonial/Testimonial";
import React from "react";

function Comments({ data }) {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letter_spacing: "5px" }}
            >
              Testimonial
            </h4>
            <h1 className="display-4">Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            {data.slice(0, 5).map((item) => (
              <Testimonial key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
