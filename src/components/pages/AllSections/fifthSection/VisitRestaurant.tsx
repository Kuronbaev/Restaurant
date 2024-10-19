"use client"
import React from "react";
import scss from "./visitRestaurant.module.scss";
import Image from "next/image";
import leftIcon from "@/images/leftIcon.png";
import { FaArrowRight } from "react-icons/fa6";
import phone from "@/images/contactPhone.png";
import email from "@/images/email.png";
import telegram from "@/images/Telegram.png";
import insta from "@/images/Instagram.png";

const VisitRestaurant = () => {
  return (
    <section className={scss.VisitRestaurant}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hero}>
            <Image width={51} height={14} src={leftIcon} alt="photo" />
            <h1>Visit Restaurant</h1>
          </div>
          <div className={scss.box}>
            <div className={scss.block}>
              <h1>Join Us for Happy Hours</h1>
              <h5>Your neighborhood</h5>
              <h4>225$.Lake Ave.Suite 1150 Pasadena,CA 911101</h4>
              <h5>Opening hours:</h5>
              <h4>Mon-Thu: 10:00 am - 01:00 am</h4>
              <h4>Fri-Sun: 10:00 am - 02:00 am</h4>
              <div className={scss.btn}>
                <hr />
                <button>
                  Purchase gift card <FaArrowRight />
                </button>
                <hr />
              </div>
            </div>
            <div className={scss.block2}>
              <h3>contact Info</h3>
              <div className={scss.contact}>
                <div className={scss.number}>
                  <Image width={28} height={28} src={phone} alt="photo" />
                  <h3>+771219900</h3>
                </div>
                <div className={scss.number}>
                  <Image width={28} height={28} src={email} alt="photo" />
                  <h3>motionweb312@gmail.com</h3>
                </div>
              </div>
              <div className={scss.number}>
                <Image width={28} height={28} src={telegram} alt="photo" />
                <Image width={28} height={28} src={insta} alt="photo" />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.1895779111883!2d74.610874575615!3d42.8899468014613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ed7cb24803%3A0xe1c77d12212757b7!2zMTM4INGD0LsuINCa0YPRgNC10L3QutC10LXQstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1729327960851!5m2!1sru!2skg"
                width="500"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitRestaurant;
