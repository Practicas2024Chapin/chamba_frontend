import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3000/practica/v1",
    timeout: 5000,
  });
  
  apiClient.interceptors.request.use(
    (config) => {
      const getToken = localStorage.getItem("token");
      console.log("Token obtenido:", getToken); // Para verificar el token
      if (getToken) {
        
        config.headers.Authorization = `${getToken}`;
      }
      return config;
    },
    (e) => {
      return Promise.reject(e);
    }
);

  
  

export const createPost = async (data) => {
    try {
        return await apiClient.post("/post/post", data);
    } catch (e) {
        console.log("Error en la creación de post:", e); // Añadir este log
        return {
            error: true,
            e,
        };
    }
};

export const getAllPosts = async () => {
    try{
        return await apiClient.get("/post/allposts")
    }catch(e){
        return{
            error: true,
            e,
        };
    }
}

export const getMyPost = async () => {
    try{
        return await apiClient.get("/post/posts");
    }catch(e){
        return{
            error: true,
            e,
        };
    }
}