import axios from "axios"

//const  baseUrl ='http://52.90.82.154:4000/signinn'
const  baseUrl ='http://localhost:4000/signinn'




const login= async  credentials => {
    const {data } = await axios.post(baseUrl,credentials)
    return data 
}   

const guardar= async  credentials => {
    const {data } = await axios.post(baseUrl,credentials)
    return data 
} 
export default {login, guardar}