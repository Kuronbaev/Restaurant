import React from "react";
import scss from "./about.module.scss";
import Image from "next/image";
import leftIcon from "@/images/leftIcon.png";
import chef from "@/images/second_section_chef.png";
import food from "@/images/second_section_food.png";

const About = () => {
  return (
    <section className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hero}>
            <Image src={leftIcon} alt="photo" width={50} height={14} />
            <h1>About Us</h1>
          </div>

          <div className={scss.block}>
            <h1>A Journey Throught Cafesio Flavors</h1>
            <p>
              Try dishes that will open up new tastes for you and delight your
              eyes with their appearance. Here you will find a cozy atmosphere,
              excellent service and attention to each guest. Book a table now
              and enjoy a unique experience of taste discovery!
            </p>
          </div>
          <div className={scss.images}>
            <Image src={chef} alt="photo" width={520} height={300} />
            <Image src={food} alt="photo" width={520} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
