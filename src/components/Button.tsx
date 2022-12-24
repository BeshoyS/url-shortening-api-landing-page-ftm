import { FC, SyntheticEvent } from "react";

type ButtonProps = {
  title: string;
  onClick?: (e: SyntheticEvent) => void;
  styles?: string | "";
  type?: string;
  unique?: string | "";
};

const Button: FC<ButtonProps> = ({ unique, title, onClick, styles, type }) => {
  return (
    <button
      id={unique}
      type={type == "submit" ? "submit" : "button"}
      className={`btn ${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
