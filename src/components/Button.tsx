import { FC } from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  styles?: string | "";
};

const Button: FC<ButtonProps> = ({ title, onClick, styles }) => {
  return (
    <button className={`btn ${styles}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
