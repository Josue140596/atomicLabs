import React  from "react";

//Layout
import { LayoutSaberMas } from "./LayoutSaberMas";


//Imagen del progreso de titles
import img_progreso from "../../assets/Group 4025.png";


//react router
import { Link } from "react-router-dom";






export const TerminosCondiciones = ({history}) => {

  


  //Evento de enviar
  //Este evento es muy importante ya que vuelve hacer
  //validaciones en mis inputs y haré los respectivos dispatch
  //que requiero como aumentar la barra de progreso, cambiar
  //la imagen y hacer una navegación a la sigiuente página
  const handleEnviar = (e) => {
    e.preventDefault();

    history.push("/datosenviados")
  };

  return (
    <LayoutSaberMas>
      <div className="content-titulos-regresar">
        <span className="content-regresar pointer">
          <Link className="styles-link-regresar" to="/codigo">
            <i className="fas fa-chevron-left"></i> Regresar
          </Link>
        </span>

        <div className="titles">
          <img src={img_progreso} alt="uno_uno" />
          <span>TERMINOS Y</span>
          <span>CONDICIONES</span>
        </div>
      </div>

      <div className="parrafo-consejos">
        <p>
          Por favor revisa nuestros términos y condiciones para este servicio:
          
        </p>
      </div>

      <div className="content-forms">
          <button className="btn-terminos" >Consulte Términos y condiciones</button>
        <form>

          <div className="content-inputs-errors">
          
              <input className="checkStyle" checked={true} name="condiciones" type="checkbox" />
              Acepto los Términos y Condiciones

            <span className="texto-error"></span>
          </div>

          <button onClick={handleEnviar} className="pointer">
            Enviar
          </button>
        </form>






      </div>


    
    </LayoutSaberMas>
  );
};
