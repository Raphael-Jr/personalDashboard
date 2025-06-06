import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onclick: () => void;
  color?: "primary" | "secondary" | "dark";
}

const Button = ({ children, onclick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
