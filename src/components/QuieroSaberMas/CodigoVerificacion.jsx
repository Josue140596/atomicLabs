import React from "react";

//Hooks de react-redux
//que me permitira mandar mis valores a mi store
//por medio de reducers
import {  useSelector } from "react-redux";

import img_edit from '../../assets/Group 4026.png'



//Custome hooks
//Este form me ayudará a recibir
//los datos y hacer validaciones
import { useForm } from "../../hooks/useForm";

import { LayoutSaberMas } from "./LayoutSaberMas";

import img_progreso from "../../assets/Group 4024.png";

import { Link } from "react-router-dom";

export const CodigoVerificacion = ({ history }) => {


 
    

  //Recogemos el numero para implementarlo en el numero donde se envio el mensaje
  const {numero} = useSelector(state => state.UI)

  //Uso de mi Hook donde puedo obtener los valores de mis input
  //Puedes ver este Hook en la carpeta de HOOKS
  const [values, handleInputChange] = useForm({
    codigo: "",
  });

  const { codigo } = values;

  //Evento cuando escribe el usuario
  //pues me permite hacer cambio en el DOM
  //como cambiar el border o un innerHTML para
  //poner los erros abajo del input
  const handleKeyPress = (e, values = 0) => {
    if (values.length < 5 || values.length > 6) {
      //Cambio la clase para el border rojo
      e.target.offsetParent.className = "errors";
      //Cambio el texto del span
      e.target.offsetParent.nextElementSibling.innerHTML = `${e.target.name} deberá tener 5 digitos`;
    } else {
      //Cambio la clase para el border rojo
      e.target.offsetParent.className = "wrapper-icon-input";
      //Cambio el texto del span
      e.target.offsetParent.nextElementSibling.innerHTML = "";
    }
  };

  //Evento de enviar
  //Este evento es muy importante ya que vuelve hacer
  //validaciones en mis inputs y haré los respectivos dispatch
  //que requiero como aumentar la barra de progreso, cambiar
  //la imagen y hacer una navegación a la sigiuente página
  const handleEnviar = (e) => {
    e.preventDefault();

    if (codigo < 5) {
      e.target.form[0].offsetParent.className = "errors";
      e.target.form[0].offsetParent.nextElementSibling.innerHTML = `Código deberá tener 5 digitos`;
    } else {

      

      //Y continuamos con la siguiente seccion
      // con history que nos provee react router
      history.push("/aceptandoCodigo");
    }
  };

  return (
    <LayoutSaberMas>
      <div className="content-titulos-regresar">
        <span className="content-regresar pointer">
          <Link className="styles-link-regresar" to="/valida">
            <i className="fas fa-chevron-left"></i> Regresar
          </Link>
        </span>

        <div className="titles">
          <img src={img_progreso} alt="uno_uno" />
          <span>CÓDIGO DE </span>
          <span>VERIFICACIÓN</span>
        </div>
      </div>

      <div className="parrafo-consejos">
        <p>
          Te enviamos un SMS al número:

          <br />
           +{numero} <Link to="/editarTelefono" ><img src={img_edit} alt="editar" /></Link>
          <br />
          Ingresa el código de verificación:
          <br />
        </p>
      </div>

      <div className="content-forms">
        <form>
          <label>Código de verificación</label>
          <div className="content-inputs-errors">
            <div className="wrapper-icon-input">
              <input
                value={codigo}
                autoComplete="off"
                onKeyUp={(e) => handleKeyPress(e, codigo)}
                onChange={handleInputChange}
                name="codigo"
                type="number"
              />
            </div>

            <span className="texto-error"></span>
          </div>

          <div className="text-nocodigo">
            <p>¿No recibiste el código? <Link className="styles-link-regresar" to="/renviandoCodigo">Reenviar código</Link></p>
          </div>

          <button onClick={handleEnviar} className="pointer">
            Validar código
          </button>
        </form>
      </div>
    </LayoutSaberMas>
  );
};
