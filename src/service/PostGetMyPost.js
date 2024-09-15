import { data } from "autoprefixer";
import axios from "axios";

export const getMyPost = async () => {
    const URL = "http://127.0.0.1:3000/practica/v1/post/posts?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NmUwZmY1ZGZiNzUzMGFkNWMwN2QxMTkiLCJlbWFpbCI6Im1hdGVvQGNvbXBhbnkub3JnLmd0IiwiaWF0IjoxNzI2Mzc5NDQwLCJleHAiOjE3MjY0MDgyNDB9.NU0y4QxhbQhqn_G9-4IUQUHsCatjrgVUA3z705HCqYg";
    try {
        const res = await axios.get(URL);
        if (res.status === 200) {
            console.log('Respuesta de la API:', res.data.postYComentario); // Agrega este log
            return res.data.postYComentario;
        } else {
            return [];
        }
    } catch (e) {
        console.log(e);
        return []; // Devuelve un array vacío en caso de error
    }
}
