import axios from "axios"

const baseUrl = 'https://api.santacatalinafideicomiso.com/usuario1/'

const subirprueba = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata)
  console.log(data)

}

const subirlegajode = async ( formdata) => {
 

  console.log(formdata)
  await axios.post('https://api.santacatalinafideicomiso.com/links/subirlegajodni', formdata)

  
  



}


export default { subirprueba, subirlegajode };