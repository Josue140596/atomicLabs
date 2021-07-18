import { types } from "../types-reducers/types";

export const Aumentarbarra = (valor) => {
  return {
    type: types.aumentarbarra,
    payload: {
      valor,
    },
  };
};
export const NumeroTelefonico = (numero) => {
  return {
    type: types.numeroTelefonico,
    telefono: {
      numero
    },
  };
};
