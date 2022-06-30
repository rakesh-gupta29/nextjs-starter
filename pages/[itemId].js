import { MongoClient , ObjectId} from "mongodb"
import design from "../styles/details.module.css"
import Head from "next/head"

export default function ItemDescriptionPage (  { data  }  ){
    data = JSON.parse ( data )
    return(
        <>
            <Head>
                <title >blog details  </title>
                <meta name="description" content="blog details " />
            </Head> 
            <div className={ design.item }>
                <h1> { data.first   } </h1>
                <h1>{ data.last } </h1>
                <h1> { data.age } </h1>
            </div>
        </>
    )
}

export async function getStaticProps( context ) {
      // this context  will have a params key havinf the url data  
    const id = context.params.itemId;
    // getting the data of targeted meetup here 
    const client = await  MongoClient.connect("mongodb+srv://rakeshgupta:helloworld@cluster0.cvk93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    const db = client.db();
    const collection =   db.collection("items");
    const targetItem  = await collection.findOne({ _id : ObjectId( id ) });
   
    return{
        props:{
             data : JSON.stringify ( targetItem )
        } 
        
    }
}
export async function getStaticPaths (){
     // need to export when 
     // 1. when it is a dynamic page and we are using the getStaticProps so we need to specify that during build timw which of the following is to be pre-rendered as the html page 
   
    const client = await  MongoClient.connect("mongodb+srv://rakeshgupta:helloworld@cluster0.cvk93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    const db = client.db();
    const collection =   db.collection("items");
    const data =await  collection.find({},{_id:1}).toArray();
    return {
        fallback:false, // what is this is true
        paths:data.map( i =>({
            params:{
                itemId: i._id.toString()
            }
        }))
    }

}