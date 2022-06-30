

import design from "./index.module.css"
import { useRouter } from "next/router"
export default function Item( { data }){
    const router = useRouter();
    const handleClick = ()=> router.push(`/${data.id}`)
    return(
        <div  className={ design.itemWrapper }>
           <h1>{ data.first}</h1>
           <h1>{ data.last}</h1>
           <h1>{ data.age}</h1>
           <button onClick={ handleClick } >Watch Details</button>
        </div>
    )

}