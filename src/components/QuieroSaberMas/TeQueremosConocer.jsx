import React from "react";


//Hooks de react-redux
//que me permitira mandar mis valores a mi store
//por medio de reducers 
import {useDispatch} from 'react-redux';

//Aciones que ejecuta el reducer
import { Registrar } from '../../actions/actionAuth';
import { Aumentarbarra } from "../../actions/actionUI";

import img_progreso_1_1 from "../../assets/Group 4014.png";

//Custome hooks
//Este form me ayudará a recibir
//los datos y hacer validaciones
import { useForm } from "../../hooks/useForm";

//Componente que actua como LAYOUT
import { LayoutSaberMas } from "./LayoutSaberMas";

export const TeQueremosConocer = ({history}) => {

  //Voy a tener acceso al dispatch de las acciones
  const dispatch = useDispatch();

  //Este dispatch lo hago para cuando el usuario quiera regresar
  //y regrese al mismo valor de la barra
  dispatch(Aumentarbarra(20));

  //Uso de mi Hook donde puedo obtener los valores de mis input
  //Puedes ver este Hook en la carpeta de HOOKS
  const [values, handleInputChange] = useForm({
    nombre: "",
    apellidos: "",
  });

  const { nombre, apellidos } = values;




  //Evento cuando escribe el usuario
  //pues me permite hacer cambio en el DOM
  //como cambiar el border o un innerHTML para
  //poner los erros abajo del input
  const handleKeyPress = (e, values = 0) => {
    if (values.length < 5) {

        //Cambio la clase para el border rojo
      e.target.offsetParent.className = "errors";
      //Cambio el texto del span
      e.target.offsetParent.nextElementSibling.innerHTML = `${e.target.name} deberá tener mínimo 5 caracteres`;
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

    if (nombre < 5) {
      e.target.form[0].offsetParent.className = "errors";
      e.target.form[0].offsetParent.nextElementSibling.innerHTML = `nombre deberá tener mínimo 5 caracteres`;
    } else  if (apellidos < 5) {
      e.target.form[1].offsetParent.className = "errors";
      e.target.form[1].offsetParent.nextElementSibling.innerHTML = `apellidos deberá tener mínimo 5 caracteres`;
    }else{

      //Cumpliedo las validaciones hago un dispatch
      // y envio los datos como nombre y apellidos
      //a mi store
      dispatch(Registrar(nombre, apellidos, true));

     

      //Y continuamos con la siguiente seccion
      // con history que nos provee react router
      history.push("/valida")
    }

   

   

  };


  

  return (
    <LayoutSaberMas>
      
      <div className="content-titulos-regresar">
      

        <div className="titles">
          <img src={img_progreso_1_1} alt="uno_uno" />
          <span>TE QUEREMOS</span>
          <span>CONOCER</span>
        </div>
      </div>

      <div className="parrafo-consejos">
        <p>
          Queremos saber que eres tú, por favor ingresa los siguientes datos:
        </p>
      </div>

      <div className="content-forms">
        <form>
          <label>Nombre (s)</label>
          <div className="content-inputs-errors">
            <div className="wrapper-icon-input">
              <input
                value={nombre}
                autoComplete="off"
                onKeyUp={(e) => handleKeyPress(e, nombre)}
                onChange={handleInputChange}
                name="nombre"
                type="text"
              />
              <i className="fas fa-lock"></i>
            </div>

            <span className="texto-error"></span>
          </div>

          <label>Apellidos</label>
          <div className="content-inputs-errors">
            <div className="wrapper-icon-input">
              <input
                value={apellidos}
                autoComplete="off"
                onKeyUp={(e) => handleKeyPress(e, apellidos)}
                onChange={handleInputChange}
                name="apellidos"
                type="text"
              />
              <i className="fas fa-lock"></i>
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
