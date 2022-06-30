
import { CreateForm } from "../components"
import { useRouter } from 'next/router';



 export default function CreateItem (){
     const router = useRouter();

    const handleForm =  async  inputData   =>{
         const res = await fetch("/api/create-item",{
            method:"POST",
            body:JSON.stringify( inputData ),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data= await res.json();
        if ( data.isSuccess)  router.push("/")
       else  alert("error occured")
        
    }
    return (
       < CreateForm  handleForm = {  handleForm} />
    )
}