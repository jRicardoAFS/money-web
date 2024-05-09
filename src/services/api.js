import axios from 'axios'

const api = axios.create({
    baseURL: "https://money-web-blush.vercel.app/"
})

export default api;