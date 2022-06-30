
import design from "./index.module.css"
import { useRef } from "react"

export default function CreateForm ( { handleForm }){
    const firstRef = useRef("")
    const lastRef = useRef("")
    const ageRef = useRef("")
     
    const handleSubmit = e   => {
        e.preventDefault()
        const data = {
            first:firstRef.current.value ,
            last:lastRef.current.value ,
            age:ageRef.current.value ,
        };
        handleForm ( data )
    }
    return (
        <form onSubmit={handleSubmit  } className={ design.wrapper }>
            <input ref={firstRef} type="text" placeholder="Enter First Name" />
            <input ref={lastRef } type="text" placeholder="Enter last Name " />
            <input  ref ={ ageRef } type="number" placeholder="Enter Age " />
            <button type="submit">Create</button>
        </form>
    )
}