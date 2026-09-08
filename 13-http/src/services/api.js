import axios from "axios";


const api = axios.create({

    //Bloqueio https no Senac
    baseURL: 'https://viacep.com.br/ws'
});

export default api;