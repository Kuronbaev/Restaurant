import React from "react";
import scss from "./bestSellers.module.scss";
import leftIcon from "@/images/leftIcon.png";
import Image from "next/image";
import first_photo from "@/images/third_section_1.png";
import second_photo from "@/images/third_section_2.png";
import arrow from "@/images/third_section_arrow.png";

const BestSellers = () => {
  return (
    <section className={scss.BestSellers}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hero}>
            <Image src={leftIcon} alt="photo" width={51} height={14} />
            <h3>Best Sellers</h3>
          </div>
          <div className={scss.block}>
            <div className={scss.text}>
              <h1>You Only Reserve Exception</h1>
              <p>
                Each location has a menu that`s curated just for them. See what
                new at your Cafesio and You`ll find Cafesio Covent Carden
                moments.
              </p>
            </div>
            <div className={scss.images}>
              <Image src={first_photo} alt="photo" width={266} height={281} />
              <Image src={second_photo} alt="photo" width={266} height={281} />
              <Image src={arrow} alt="photo" width={23} height={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
