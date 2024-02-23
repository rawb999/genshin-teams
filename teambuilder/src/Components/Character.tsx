import React, { useState } from "react";

interface CharacterProps {
  imageSrc: string;
  name: string;
  isSelected: boolean;
  isPrimary: boolean; 
  onClick: () => void; 
}

const Character: React.FC<CharacterProps> = ({
  imageSrc,
  name,
  isSelected,
  isPrimary,
  onClick,
}) => {
  const imageStyle = {
    cursor: "pointer",
    opacity: isSelected ? 1 : 0.3,
    outline: isPrimary ? "2px solid red" : "none", 
  };

  return (
    <div className="character" onClick={onClick} title={name}>
      <img src={imageSrc} alt={name} style={imageStyle} />
    </div>
  );
};

export default Character;
