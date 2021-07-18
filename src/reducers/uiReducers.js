
//Son los tipos de acciones que voy hacer
//en la parte de autorización
import { types } from "../types-reducers/types";

export const uiReducers = (state={}, action) => {
  switch (action.type) {
    
    case types.aumentarbarra:
      return {
        ...state,
        valor: action.payload.valor,
     
      };
    case types.numeroTelefonico:
      return {
        ...state,
        numero: action.telefono.numero,
     
      };

    default:
      return state;
  }
};
