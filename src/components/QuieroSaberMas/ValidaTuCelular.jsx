import React from "react";

//Hooks de react-redux
//que me permitira mandar mis valores a mi store
//por medio de reducers
import { useDispatch } from "react-redux";

//Aciones que ejecuta el reducer
import { Aumentarbarra, NumeroTelefonico } from "../../actions/actionUI";

//Custome hooks
//Este form me ayudará a recibir
//los datos y hacer validaciones
import { useForm } from "../../hooks/useForm";

import { LayoutSaberMas } from "./LayoutSaberMas";

import img_progreso from "../../assets/Group 4023.png";

import { Link } from "react-router-dom";

export const ValidaTuCelular = ({ history }) => {
  //Voy a tener acceso al dispatch de las acciones
  const dispatch = useDispatch();

  //Este dispatch lo hago para cuando el usuario quiera regresar
  //y regrese al mismo valor de la barra
  dispatch(Aumentarbarra(42));

  //Uso de mi Hook donde puedo obtener los valores de mis input
  //Puedes ver este Hook en la carpeta de HOOKS
  const [values, handleInputChange] = useForm({
    numero: "",
  });

  const { numero } = values;

  //Evento cuando escribe el usuario
  //pues me permite hacer cambio en el DOM
  //como cambiar el border o un innerHTML para
  //poner los erros abajo del input
  const handleKeyPress = (e, values = 0) => {
    if (values.length < 10 || values.length > 11) {
      //Cambio la clase para el border rojo
      e.target.offsetParent.className = "errors";
      //Cambio el texto del span
      e.target.offsetParent.nextElementSibling.innerHTML = `${e.target.name} deberá tener  10 digitos`;
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

    if (numero < 10) {
      e.target.form[0].offsetParent.className = "errors";
      e.target.form[0].offsetParent.nextElementSibling.innerHTML = `celular deberá tener  10 digitos`;
    } else {
      //Y continuamos con la siguiente seccion
      // con history que nos provee react router
      history.push("/enviandoCodigo");

      //Mandamos el numero al store
      dispatch(NumeroTelefonico(numero));

      //Este dispatch lo hago para cuando el usuario quiera regresar
      //y regrese al mismo valor de la barra

      dispatch(Aumentarbarra(65));
    }
  };

  return (
    <LayoutSaberMas>
      <div className="content-titulos-regresar">
        <span className="content-regresar pointer">
          <Link className="styles-link-regresar" to="/conocermas">
            <i className="fas fa-chevron-left"></i> Regresar
          </Link>
        </span>

        <div className="titles">
          <img src={img_progreso} alt="uno_uno" />
          <span>VALDA TU</span>
          <span>CELULAR</span>
        </div>
      </div>

      <div className="parrafo-consejos">
        <p>
          Necesitamos validar tu número para continuar
          <br />
          Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
        </p>
      </div>

      <div className="content-forms">
        <form>
          <label>Número de Celular</label>
          <div className="content-inputs-errors">
            <div className="wrapper-icon-input">
              <input
                value={numero}
                autoComplete="off"
                onKeyUp={(e) => handleKeyPress(e, numero)}
                onChange={handleInputChange}
                name="numero"
                type="number"
              />
            </div>

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
