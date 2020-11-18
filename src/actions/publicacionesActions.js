import axios from "axios";
import { CARGANDO, ERROR, TRAER_TODOS } from "../types/publicacionesTypes";

export const traerTodos = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const respuesta = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Algo salió mal, intente mas tarde.",
    });
  }
};
