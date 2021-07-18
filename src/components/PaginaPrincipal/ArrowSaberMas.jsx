import React from "react";

//Scroll smooth

import { Link } from "react-scroll";

export const ArrowSaberMas = () => {
  return (
    // Es la flecha de saber más
    // te invita a hacer scroll

    <Link
      
      className="test1"
      to="somos"
      spy={true}
      smooth={true}
      duration={500}
    >
      <div className="saber-mas-arrow ">
        {/* Aquí use FONTAWESOM para agregar el icono de flecha */}
        <div className="pointer">
          <i className="fas fa-chevron-down"></i>
        </div>
        <span>Quiero saber más</span>
      </div>
    </Link>
  );
};
