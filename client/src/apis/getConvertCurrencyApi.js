import axios from 'axios'

const API = axios.create({baseURL:process.env.REACT_APP_SERVER_URL})

 const GetCurrency = async ({from, to}) => {
    try{
        const result = await API.get(`/convert?from=${from}&to=${to}`)
        return result.data
        
    }
    catch(err) {
        console.log(err)
    }
}


export default GetCurrency