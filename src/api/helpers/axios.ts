import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ADDRESS
});

instance.interceptors.request.use((request) => {
    request.params = {
      apikey: import.meta.env.VITE_PUBLIC_API_KEY,
      ts: Date.now()
    }
    return request;
});


export default instance;
