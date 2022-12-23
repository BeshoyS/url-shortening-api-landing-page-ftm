import { FC } from "react";
import { featureCardData } from "../data/featureCardData";
import FeatureCard from "./FeatureCard";

type Props = {};

const Statistics: FC = (props: Props) => {
  return (
    <section className="statistics">
      <div className="statistics__wrapper">
        <div className="statistics__heading">
          <h2 className="statistics__title">Advanced Statistics</h2>
          <p className="statistics__desc">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <section className="statistics__features">
          {featureCardData?.map(({ id, icon, title, desc }) => (
            <FeatureCard key={id} id={id} icon={icon} title={title} desc={desc} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Statistics;
