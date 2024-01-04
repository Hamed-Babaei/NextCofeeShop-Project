import styles from "@/styles/Product.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Comments = ({ data }) => {
  console.log(data);
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>
        <div className="row">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
            }}
            modules={[Pagination, Autoplay]}
            className={styles.swiper}
          >
            {data.length ? (
              data.slice(0, 6).map((comment) => (
                <SwiperSlide className={styles.swiper_slide} key={comment.id}>
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="testimonial-item__img"
                        src={comment.img}
                        alt=""
                      />
                      <div className="ml-3 testimonial-item__title">
                        <h4>{comment.username}</h4>
                        <span className="testimonial-item__score">
                          {(Math.floor(comment.score) >= 4 && "Good") ||
                            ((Math.floor(comment.score) <= 3) &
                              (Math.floor(comment.score) >= 2) &&
                              "Average") ||
                            (Math.floor(comment.score) <= 1 && "Bad")}
                        </span>
                      </div>
                    </div>
                    <p className="m-0">{comment.body}</p>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <>
                <div className="alert">
                  <h5>There isn't Comment For This Item</h5>
                </div>
              </>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Comments;
