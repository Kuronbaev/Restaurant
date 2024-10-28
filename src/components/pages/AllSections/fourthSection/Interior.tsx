"use client";
import interior1 from "@/assets/images/interior1.png";
import interior2 from "@/assets/images/interior2.png";
import interior3 from "@/assets/images/interior3.png";
import interior4 from "@/assets/images/interior4.png";
import interior5 from "@/assets/images/interior5.png";
import leftIcon from "@/assets/images/leftIcon.png";
import rightIcon from "@/assets/images/rightIcon.png";
import Image from "next/image";
import scss from "./interior.module.scss";

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
            <Image
              src={interior1}
              alt="photo"
              width={400}
              height={400}
              quality={100}
            />

            <div className={scss.box}>
              <Image
                src={interior2}
                alt="photo"
                width={415}
                height={200}
                quality={100}
              />
              <div className={scss.images}>
                <Image
                  src={interior3}
                  alt="photo"
                  width={200}
                  height={186}
                  quality={100}
                />
                <Image
                  src={interior4}
                  alt="photo"
                  width={200}
                  height={186}
                  quality={100}
                />
              </div>
            </div>
            <Image
              src={interior1}
              alt="photo"
              width={400}
              height={400}
              quality={100}
            />

            <div className={scss.box}>
              <Image
                src={interior2}
                alt="photo"
                width={415}
                height={200}
                quality={100}
              />
              <div className={scss.images}>
                <Image
                  src={interior3}
                  alt="photo"
                  width={200}
                  height={186}
                  quality={100}
                />
                <Image
                  src={interior4}
                  alt="photo"
                  width={200}
                  height={186}
                  quality={100}
                />
              </div>
            </div>
            <Image src={interior5} alt="photo" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior;
