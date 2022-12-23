import { FC } from "react";
import { featureCardDataTypes } from "../data/featureCardData";

type Props = featureCardDataTypes;

const FeatureCard: FC<Props> = ({ id, icon, title, desc }) => {
  return (
    <section className="featurecard">
      <div className="featurecard__iconwrapper">
        <img src={icon} alt="" />
      </div>
      <article className="featurecard__content">
        <h3 className="featurecard__title">{title}</h3>
        <p className="featurecard__desc">{desc}</p>
      </article>
    </section>
  );
};

export default FeatureCard;
