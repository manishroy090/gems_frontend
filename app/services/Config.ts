import Axios from "../libs/axios";

export async function getAllCountries(){
   const countries = Axios.get('http://127.0.0.1:8080/api/v1/config')
    .then((res)=>{
        return res.data.countries;
    }).catch((error)=>{
        console.log('error',error);
    });


    return countries;

}