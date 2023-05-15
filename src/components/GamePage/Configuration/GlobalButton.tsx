import "./GlobalButton.scss";
import React from "react";

type Props = {
  buttonText: string;
};
export const GlobalButton: React.FC<Props> = ({ buttonText }) => {
  return <button className="globalButton">{buttonText}</button>;
};

export default GlobalButton;
