import { FC } from "react";
import Button from "./Button";



const GetStarted: FC = () => {
  return (
    <section className="getstarted">
      <h2 className="getstarted__title">Boost your links today</h2>
      <Button title="Get Started" styles="getstarted__btn" />
    </section>
  );
};

export default GetStarted;
