import axios from "axios"

const  baseUrl = 'http://52.90.82.154:4000/nivel3/'
//const  baseUrl ='http://localhost:4000/nivel3/'

const agregariccgral= async  (datos) => {
   
    const {data } = await axios.post(baseUrl+'agregariccgral2',datos)
    alert(data)
   
}  
const traerhistorial= async  () => {
   
    const {data } =await axios.get(baseUrl+'/historialicc')

    return data 
}  

export default {agregariccgral,traerhistorial};