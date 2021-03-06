import React from 'react';

const Fullscreen = () => {
  return (
    <g transform="translate(2, 6)">
      <polygon points="8 0 6 0 5.04614258 0 0 0 0 5 2 5 2 2 8 2" />
      <polygon
        transform="translate(4, 13.5) scale(1, -1) translate(-4, -13.5) "
        points="8 11 6 11 5.04614258 11 0 11 0 16 2 16 2 13 8 13"
      />
      <polygon
        transform="translate(20, 2.5) scale(-1, 1) translate(-20, -2.5) "
        points="24 0 22 0 21.0461426 0 16 0 16 5 18 5 18 2 24 2"
      />
      <polygon
        transform="translate(20, 13.5) scale(-1, -1) translate(-20, -13.5) "
        points="24 11 22 11 21.0461426 11 16 11 16 16 18 16 18 13 24 13"
      />
    </g>
  );
};

export default Fullscreen;
