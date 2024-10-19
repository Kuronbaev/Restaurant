import React from "react";
import scss from "./firstSection.module.scss";
import Image from "next/image";
import leftIcon from "@/images/leftIcon.png";
import rightIcon from "@/images/rightIcon.png";
import { FaArrowRight } from "react-icons/fa6";
import location from "@/images/location.png";
import phone from "@/images/phone.png";

const Delicious = () => {
  return (
    <section className={scss.FirstSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainBlock}>
            <div className={scss.delicious}>
              <Image width={51} height={14} src={leftIcon} alt="photo" />
              <h4>Delicious</h4>
              <Image width={51} height={14} src={rightIcon} alt="photo" />
            </div>

            <h1>Italian Cuisine</h1>
            <p>
              Classic steak & delicious with delightfully unexpenced twists. The
              Restaurant`s sunny decor was inspired by the diners
            </p>
            <div className={scss.btn}>
              <hr />
              <button>
                Reserve Your Table <FaArrowRight />
              </button>
              <hr />
            </div>
          </div>
          <div className={scss.contact}>
            <div className={scss.location}>
              <h5>Location</h5>
              <hr />
              <Image width={18} height={20} src={location} alt="location" />
              <span>Rua da moeda 1g,1200-275,Portugal</span>
            </div>
            <div className={scss.location}>
              <h5>Hotline</h5>
              <hr />
              <Image width={18} height={20} src={phone} alt="location" />
              <span>+771219900</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delicious;
