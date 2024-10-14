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

 export const createRequest = async (data) => {
    try{
        return await apiClient.post("/request/requests", data);
    }catch(e){
        return {
            error: true, 
            e,
        }
    }
 } 

 export const listPendingRequest = async () => {
    try{
        return await apiClient.get("/request/listrequest")
    }catch(e){
        return{
            error: true,
            e,
        };
    }
 }

 export const applyToJob = async (idPost) => {
    try {
        return await apiClient.post(`/application/apply/${idPost}`);
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
};

export const getUserApplications = async () => {
    try{
        return await apiClient.get("/application/applications")
    }catch(e){
        return{
            error: true,
            e,
        };
    }
 }
  
export const acceptRequest = async (requestId) => {
    try {
        return await apiClient.put(`/request/accept/${requestId}`);
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
};


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

export const getMyPostUser = async () => {
    try{
        return await apiClient.get("/post/posts");
    }catch(e){
        return{
            error: true,
            e,
        };
    }
}

export const getMyPostCompany = async () => {
    try{
        return await apiClient.get("/post/postsCompany");
    }catch(e){
        return{
            error: true,
            e,
        };
    }
}

export const getInfoUserLogged = async () => {
    try{
        return await apiClient.get("/auth/me");
    }catch(e){
        return{
            error: true,
            e,
        };
    }
}

export const startConversation = async (recipientId, content) => {
    try {
        return await apiClient.post(`/messages/conversation`, { recipientId, content });
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
};

export const getConversations = async () => {
    try {
        return await apiClient.get(`/messages/conversations`);
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
};

export const getMessages = async (conversationId) => {
    try {
        return await apiClient.get(`/messages/${conversationId}`);
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
};
