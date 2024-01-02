import React from "react";

function Menu({ data }) {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Menu & Pricing
            </h4>
            <h1 className="display-4">Competitive Pricing</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5">Hot Coffee</h1>

              {data
                .filter((item) => item.type === "hot")
                .slice(0, 3)
                .map((item) => (
                  <div key={item.id} className="row align-items-center mb-5">
                    <div className="col-4 col-sm-3">
                      <img
                        className="w-100 rounded-circle mb-3 mb-sm-0"
                        src={item.img}
                        alt=""
                      />
                      <h5 className="menu-price">${item.price}</h5>
                    </div>
                    <div className="col-8 col-sm-9">
                      <h4>{item.title}</h4>
                      <p className="m-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-lg-6">
              <h1 className="mb-5">Cold Coffee</h1>

              {data
                .filter((item) => item.type === "cold")
                .slice(0, 3)
                .map((item) => (
                  <div key={item.id} className="row align-items-center mb-5">
                    <div className="col-4 col-sm-3">
                      <img
                        className="w-100 rounded-circle mb-3 mb-sm-0"
                        style={{ height: "112px" }}
                        src={item.img}
                        alt=""
                      />
                      <h5 className="menu-price">${item.price}</h5>
                    </div>
                    <div className="col-8 col-sm-9">
                      <h4>{item.title}</h4>
                      <p className="m-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
