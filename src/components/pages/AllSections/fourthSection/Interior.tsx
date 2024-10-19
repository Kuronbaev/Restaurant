import React from "react";
import scss from "./interior.module.scss";
import Image from "next/image";
import interior1 from "@/images/interior1.png";
import interior2 from "@/images/interior2.png";
import interior3 from "@/images/interior3.png";
import interior4 from "@/images/interior4.png";
import interior5 from "@/images/interior5.png";
import leftIcon from "@/images/leftIcon.png";
import rightIcon from "@/images/rightIcon.png";

const Interior = () => {
  return (
    <section className={scss.Interior}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.hero}>
            <Image width={51} height={14} src={leftIcon} alt="photo" />
            <h1>modern interior</h1>
            <Image width={51} height={14} src={rightIcon} alt="photo" />
          </div>
          <div className={scss.block}>
            <Image src={interior1} alt="photo" width={400} height={485} />

            <div className={scss.box}>
              <Image src={interior2} alt="photo" width={501} height={244} />
              <div className={scss.images}>
                <Image src={interior3} alt="photo" width={278} height={233} />
                <Image src={interior4} alt="photo" width={208} height={233} />
              </div>
            </div>
            <Image src={interior5} alt="photo" width={427} height={488} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior;
