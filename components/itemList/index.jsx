
import design from "./index.module.css"
import ItemCard from "../item"
 export default function ItemList ( { data }){
    return(
        <section >
            { data.map ( ( i , index ) =>{
                return <ItemCard data={ i } key={ index }  />
            })}
        </section>
    )
}