import React from "react";

interface Props {
  border: string;
  color: string;
  name: string;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    name,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {name}
    </button>
  );
}

export default Button;
