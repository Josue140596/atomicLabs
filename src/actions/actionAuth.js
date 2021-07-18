import { types } from "../types-reducers/types";

export const Registrar = (nombre, apellidos, autorizado) => {
  return {
    type: types.registrar,
    payload: {
      nombre,
      apellidos,
      autorizado
    },
  };
};
