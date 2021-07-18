
//Son los tipos de acciones que voy hacer
//en la parte de autorización
import { types } from "../types-reducers/types";

export const authReducers = (state={}, action) => {
  switch (action.type) {
    case types.registrar:
      return {
        nombre: action.payload.nombre,
        apellidos: action.payload.apellidos,
        autorizado: action.payload.autorizado
      };
      

    default:
      return state;
  }
};
