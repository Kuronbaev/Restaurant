"use client";
import leftIcon from "@/assets/images/leftIcon.png";
import chef from "@/assets/images/second_section_chef.png";
import food from "@/assets/images/second_section_food.png";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import scss from "./about.module.scss";

const About = () => {
  const ref = useRef(null);
  const inInView = useInView(ref, { once: true });

  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={scss.hero}
          >
            <Image src={leftIcon} alt="photo" width={50} height={14} />
            <h1>About Us</h1>
          </motion.div>
          <div className={scss.block}>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              A Journey Through Cafesio <br /> Flavors
            </motion.h1>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, x: 50 }}
              animate={inInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              Try dishes that will open up new tastes for you and delight your
              eyes with their appearance. Here you will find a cozy atmosphere,
              excellent service and attention to each guest. Book a table now
              and enjoy a unique experience of taste discovery!
            </motion.p>
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className={scss.images}
          >
            <Image src={chef} alt="photo" width={500} height={300} />
            <Image src={food} alt="photo" width={500} height={300} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
