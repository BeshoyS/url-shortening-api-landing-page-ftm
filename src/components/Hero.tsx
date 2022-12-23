import { FC } from "react";
import heroImg from "../assets/images/illustration-working.svg";
import Button from "./Button";


const Hero: FC = () => {
  return (
    <main className="hero">
      <div>
        <img className="hero__img" src={heroImg} alt="" />
      </div>
      <section className="hero__content">
        <h1 className="hero__title">More than just shorter links</h1>
        <p className="hero__desc">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button title="Get Started" />
      </section>
    </main>
  );
};

export default Hero;
