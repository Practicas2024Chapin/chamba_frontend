import { data } from "autoprefixer";
import axios from "axios";

export const getMyPost = async () => {
    const URL = "http://127.0.0.1:3000/practica/v1/post/posts?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NmU4OGEyZDc1MmYzYmJmNTU1MzE0MzgiLCJlbWFpbCI6ImdvbnphbG9AY29tcGFueS5vcmcuZ3QiLCJpYXQiOjE3MjY1MTU3NjcsImV4cCI6MTcyNjU0NDU2N30.5ZlT4oTkdEzeGpaKPQIdJvQqo2C1kRHUULpWkGn4N-8";
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
