import React from "react";

import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";

import img_compu from "../../assets/Group 4039.png";

export const DatosEnviados = () => {


  return (
    <div className="content-datos-enviado">
      <Header />

      <div className="content-text-img">
        <div className="texts">
          <h2 className="texts-h2-datos">
            <span>TUS DATOS</span>
            <br/>
            <span>HA SIDO ENVIADO</span>
            <br/>
            <span>CON ÉXITO</span>
          </h2>
          <p>
            En breve recibirás un correo de confirmación por parte del equipo de
            AtomicLabs.
          </p>

          <p>
            Recuerda revisar tu bandeja de SPAM <br/> ¡Esperamos verte pronto!
          </p>
        </div>

        <div className="img-compu">
          <img src={img_compu} alt="compu" />
        </div>
      </div>

      <Footer />
    </div>
  );
};
