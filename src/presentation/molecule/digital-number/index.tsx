import React from "react";

export const DigitalNumber: React.FC<{ id: string }> = ({ id }) => {
  return (
    <>
      <svg width="0" height="0" viewBox="0 0 0 0">
        <defs>
          <g id="unit-top">
            <path d="M0 0 L240 0 L200 40 L40 40 L0 0"></path>
          </g>
          <g id="unit-rightt">
            <path d="M240 0 L200 40 L200 205 L220 225 L240 205 L240 0"></path>
          </g>
          <g id="unit-leftt">
            <path d="M0 0 L40 40 L40 205 L20 225 L0 205 L0 0"></path>
          </g>
          <g id="unit-mid">
            <path d="M20 225 L40 205 L200 205 L220 225 L200 245 L40 245 L20 225"></path>
          </g>
          <g id="unit-leftb">
            <path d="M20 225 L40 245 L40 410 L0 450 L0 245 L20 225"></path>
          </g>
          <g id="unit-rightb">
            <path d="M220 225 L200 245 L200 410 L240 450 L240 245 L220 225"></path>
          </g>
          <g id="unit-bot">
            <path d="M240 450 L200 410 L40 410 L0 450 L240 450"></path>
          </g>
        </defs>
      </svg>
      <svg
        id={id}
        className="digital num"
        height="120px"
        width="65px"
        viewBox="0 0 260 480"
      >
        <use xlinkHref="#unit-top" className="segment a" x="15" y="5"></use>
        <use xlinkHref="#unit-leftt" className="segment b" x="5" y="10"></use>
        <use xlinkHref="#unit-rightt" className="segment c" x="25" y="10"></use>
        <use xlinkHref="#unit-mid" className="segment d" x="15" y="15"></use>
        <use xlinkHref="#unit-leftb" className="segment e" x="5" y="20"></use>
        <use xlinkHref="#unit-rightb" className="segment f" x="25" y="20"></use>
        <use xlinkHref="#unit-bot" className="segment g" x="15" y="25"></use>
      </svg>
    </>
  );
};
