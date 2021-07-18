import React, { useEffect, useState } from "react";
import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";
import { LineaDeProgreso } from "../UI/LineaDeProgreso";

//Imagenes
import img_progreso_select_1 from "../../assets/Group 4015.png";
import img_progreso_select_2 from "../../assets/Group 4020.png";
import img_progreso_select_3 from "../../assets/Group 4021.png";
import img_progreso_select_4 from "../../assets/Group 4022.png";

import img_progreso_sin_2 from "../../assets/Group 4019.png";
import img_progreso_sin_3 from "../../assets/Group 4017.png";
import img_progreso_sin_4 from "../../assets/Group 4018.png";

import img_progreso_listo from "../../assets/Group 4016.png";

import img_comiendo from "../../assets/Group 4033.png";
import img_autro_mano from "../../assets/Group 4038.png";
import img_celular_autro from "../../assets/Group 4034.png";



import { useSelector } from "react-redux";

export const LayoutSaberMas = ({ children }) => {



  //El valor ayudará a cambiar el valor de la barra de progreso y las imagenes
  const { valor } = useSelector((state) => state.UI);

  const [progress, setProgress] = useState(20);

  useEffect(() => {
    if (valor !== undefined) {
      setProgress(valor);
    }
  }, [valor]);

  return (
    <>
      <Header />
      <section className="content-saberMas ">
        <div className="content-form-progres-button">
          <div className="content-progres">
            <ul>
              <li>
                {valor === 20 &&  <img src={img_progreso_select_1} alt="1" /> }
                {valor >= 42 &&  <img src={img_progreso_listo} alt="check" /> }

               
              </li>
              <li>
                {valor === 20 && <img src={img_progreso_sin_2} alt="1" />}
                {valor === 42 && <img src={img_progreso_select_2} alt="1" />}
                {valor >= 65  && <img src={img_progreso_listo} alt="check" />}

              </li>
              <li>
                {valor <= 42 && <img src={img_progreso_sin_3} alt="1" />}
                {valor === 65 && <img src={img_progreso_select_3} alt="1" />}
                {valor >= 88 && <img src={img_progreso_listo} alt="1" />}
               
              </li>
              <li>
                {valor <88 && <img src={img_progreso_sin_4} alt="1" />}
                {valor === 88 && <img src={img_progreso_select_4} alt="1" />}
             
              </li>
            </ul>


            {/* Linea de progreso */}
            <LineaDeProgreso value={progress} />
          </div>

          {children}
        </div>

        <div className="content-img">
         
          { valor <= 20 && <img src={img_comiendo} alt="comiendo" /> }
          { valor === 42  && <img src={img_celular_autro} alt="comiendo" /> }
          { valor === 65  && <img src={img_celular_autro} alt="comiendo" /> }
          { valor === 88 && <img src={img_autro_mano} alt="comiendo" />}
        </div>
      </section>
      <Footer />
    </>
  );
};
