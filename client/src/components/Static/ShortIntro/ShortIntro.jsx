import React from "react";
import "./ShortIntro.css";
import ImageHos from "../../../assets/images/hospital/hos.jpg";

const ShortIntro = () => {
  return (
    <>
      <div className="intro-container">
        <div className="row">
          <div className="col-md-6 img-container">
            <img src={ImageHos} alt="hosimage" className="hos-image" />
          </div>
          <div className="col-md-5 info-container">
            <h1>Healthcare </h1>
            <h6>A Super Specility Hospital</h6>
            <p>
              A specialty hospital focuses on a particular field of medicine, such as cardiology or neurology, equipped with advanced diagnostic and treatment facilities for that area. Hospitals can be categorized by their focus: single-specialty, multi-specialty (offering various primary and secondary specialties like cardiology, orthopedics, etc.), and super-specialty (providing highly advanced and specific treatments for complex conditions within a niche area)
            </p>
            <p>
              These hospitals are staffed by expert physicians and specialists, utilize cutting-edge technology, and often include other services like diagnostic imaging, rehabilitation, and patient education to provide comprehensive care. 
            </p>
            <button className="btn btn-primary">Book A Appointment Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortIntro;
