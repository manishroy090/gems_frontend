
import toast, { Toaster } from 'react-hot-toast';

export default function  useToaster(){


    function success(){
        console.log("Success");

    }



    function error(message:any){

       toast.error(message);


    }


    function warning(){

       console.log("Warning");


    }



    return {
        success,
        error,
        warning
    }
}