import React from "react";
import imageHomeTree from "../../../public/assets/images/homeThree.png";
import imageConversation from "../../../public/assets/images/conversation.png";
import Image from "next/image";

const SectionContact = () => {
  return (
    <section className="position-relative z-index-2 -t-250">
      <div className="pt-120 w-100">
        <Image
          className="w-100"
          src={imageHomeTree}
          width={1920}
          height={700}
          alt="imageHomeOne"
          loading="lazy"
          style={{
            objectFit: "cover"
          }}
        />
      </div>
      <div className="position-absolute t-249 d-flex w-100 justify-content-center gap-109">
        <div className="max-w-489 pt-120 w-100">
          <Image
            className="w-100"
            src={imageConversation}
            width={481}
            height={321}
            alt="imageHomeOne"
            loading="lazy"
            style={{
              objectFit: "cover"
            }}
          />
        </div>

        <div className="pt-180 contact">
          <div className="color-green-100 text-36 fw-medium">Empire State Building</div>
          <p className="color-gray-100 mb-0 mt-11">350 5th Ave, New York, NY 10118</p>
          <p className="color-gray-100 mb-0 mt-11">1 212-736-3100</p>
          <p className="color-gray-100 mt-11 mb-0">contacts@esbnyc.com</p>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
