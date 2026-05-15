import {Axios} from "../libs/axios";

export async function getAllCountries(){
   const countries = Axios.get('/config')
    .then((res)=>{
        return res.data.countries;
    }).catch((error)=>{
        console.log('error',error);
    });


    return countries;
}