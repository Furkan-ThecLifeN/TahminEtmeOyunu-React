import React from "react";

function Card({ cards, handleSelected, rotated, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleSelected(cards);
    }
  };

  return (
    <div className="card">
      <div className={rotated ? "rotated" : ""}>
        <img
          className={`w-[100px] front`}
          src={cards.path}
          alt="meyve"
        />
        <img
          className="w-[100px] back"
          src="/img/Kapak.png"
          alt="kapak"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Card;
