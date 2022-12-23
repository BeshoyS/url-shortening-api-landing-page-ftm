import brandIcon from "../assets/images/icon-brand-recognition.svg";
import recordsIcon from "../assets/images/icon-detailed-records.svg";
import customizableIcon from "../assets/images/icon-fully-customizable.svg";

export interface featureCardDataTypes {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export const featureCardData: featureCardDataTypes[] = [
  {
    id: crypto.randomUUID(),
    icon: brandIcon,
    title: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: crypto.randomUUID(),
    icon: recordsIcon,
    title: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: crypto.randomUUID(),
    icon: customizableIcon,
    title: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];
