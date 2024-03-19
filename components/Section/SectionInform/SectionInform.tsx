import React from "react";
import imageHomeOne from "../../../public/assets/images/homeOne.png";
import Image from "next/image";

const SectionInform = () => {
  return (
    <section className="position-relative z-index-2">
      <div>
        <Image
          className="w-100"
          src={imageHomeOne}
          width={1920}
          height={880}
          alt="imageHomeOne"
          loading="lazy"
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <div className="position-absolute t-249 d-flex w-100 justify-content-center px-16">
        <div className="max-w-999 text-center">
          <p className="text-24 text-white">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.</p>
          <h1 className="text-72 fw-bold line-89 text-center text-white mb-0">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur...
          </h1>
          <div className="d-flex justify-content-center mt-33">
            <div className="h-10 bg-green-100 w-438 d-flex justify-content-center line-info"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInform;
