import React from "react";

const Header = () => {
  return (
    <div>
      <section className="container-fluid banner py-5 text-center">
        <div className="row py-lg-5">
          <div className="texto col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-bold text-white mt-5">VibeOn</h1>
            <p className="text-white">
            Descuentos exclusivos en smartphones, laptops, accesorios y más.
            </p>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    </div>
  );
};

export default Header;
