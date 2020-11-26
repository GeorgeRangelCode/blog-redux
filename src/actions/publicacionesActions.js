import axios from "axios";
import {
  CARGANDO,
  ERROR,
  TRAER_POR_USUARIO,
} from "../types/publicacionesTypes";

export const traerPorUsuario = (key) => async (dispatch, getState) => {
  const { usuarios } = getState().usuariosReducer;
  const { publicaciones } = getState().publicacionesReducer;
  const usuarios_id = usuarios[key].id;

  const respuesta = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${usuarios_id}`
  );

  const publicaciones_actualizadas = [...publicaciones, respuesta.data];

  dispatch({
    type: TRAER_POR_USUARIO,
    payload: publicaciones_actualizadas,
  });
};
