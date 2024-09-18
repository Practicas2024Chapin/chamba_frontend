import { data } from "autoprefixer";
import axios from "axios";

export const getMyPost = async () => {
    const URL = "http://127.0.0.1:3000/practica/v1/post/posts?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NmU5OWUxNWNhMjMyOGY3YWFlODAwNWEiLCJlbWFpbCI6Im1hdHZAY29tcGFueS5vcmcuZ3QiLCJpYXQiOjE3MjY2NzQwOTAsImV4cCI6MTcyNjcwMjg5MH0.m5-NAv8yS2cd2LUH01J5xesO-qtedS0klpfsTw-MfpM";
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
