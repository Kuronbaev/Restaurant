"use client";
import FormInput from "@/components/ui/ModalWindow/FormInput";
import Template from "@/components/ui/Template";
import leftIcon from "@/assets/images/leftIcon.png";
import rightIcon from "@/assets/images/rightIcon.png";
import location from "@/assets/images/location.png";
import contact from "@/assets/images/phone.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import scss from "./firstSection.module.scss";

const Delicious = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleBackdropClick = () => {
    setShowForm(false);
  };

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showForm]);

  const text = "Italian Cuisine";
  const letters = text.split("");

  return (
    <section className={scss.FirstSection}>
      <div className="container">
        <div className={scss.content}>
          {showForm && (
            <div
              className={`${scss.backdrop} ${showForm ? scss.show : ""}`}
              onClick={handleBackdropClick}
            ></div>
          )}

          <FormInput showForm={showForm} />
          <Template>
            <div className={scss.mainBlock}>
              <div className={scss.hero}>
                <Image width={51} height={14} src={leftIcon} alt="photo" />
                <h1>Delicious</h1>
                <Image width={51} height={14} src={rightIcon} alt="photo" />
              </div>

              <h1 className={scss.animatedText}>
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <p>
                Classic steak & delicious with delightfully unexpected twists.
                The Restaurant's sunny decor was inspired by the diners.
              </p>
              <div className={scss.btn}>
                <hr />
                <button
                  className={scss.formContact}
                  onClick={handleButtonClick}
                >
                  Reserve Your Table <FaArrowRight className={scss.arrow} />
                </button>
                <hr />
              </div>
            </div>
          </Template>

          <div className={scss.contact}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={scss.location}
            >
              <h5>Location</h5>
              <hr />
              <Image src={location} alt="location" width={16} height={20} />
              <span>Rua da moeda 1g, 1200-275, Portugal</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={scss.location}
            >
              <h5>Hotline</h5>
              <hr />
              <Image src={contact} alt="contact" width={16} height={20} />

              <span>+771219900</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delicious;
