import Link from "next/link";
import React from "react";

function PageHeader({ route }) {
  return (
    <>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ min_height: "400px" }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            {route}
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <Link className="text-white" href="/">
                Home
              </Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <Link href={`/${route}`} className="m-0 text-white">
              {route}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageHeader;
