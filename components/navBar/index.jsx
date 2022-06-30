
import design from "./index.module.css"
import Link from "next/link"

export default function NavBar(){
    return(
        <div className={ design.navBar}>
           <h1>Home</h1>
           <div className={design.options }>
               <Link href="/create">Create</Link>
               <Link href="/">Watch</Link>
           </div>
        </div>
    )
}