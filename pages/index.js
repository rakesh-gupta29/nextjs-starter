import { MongoClient } from "mongodb"
import { ItemList } from "../components"
import Head from "next/head"

export default function Home( { list     } ) {
  return (
      <>
      <Head>
        <title >homepage </title>
        <meta name="description" content="this is a blogging app" />

      </Head>
      <main>
        <ItemList data={ list } />  
      </main>
      
    
    
    </>
  )
}

export async function getStaticProps (){
   // this will block the page loading untill resolved 
   // problems :
   // outdating the data changes 

   const client = await  MongoClient.connect("mongodb+srv://rakeshgupta:helloworld@cluster0.cvk93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
   const db = client.db();
   const collection =   db.collection("items");
   const data =await  collection.find().toArray();
   client.close(); // closing the collection 
   
  return{
    props:{
      list:data.map( i =>({
        first:i.first,
        last:i.last,
        age:i.age,
        id:i._id.toString()
      })
      )
    },
    revalidate:10 // in seconds 
  }
}
// export async function getServerSideProps ( context ){
//   // runs every time on every request 

//   const req = context.req;
//   const res = context.res ;
//   return{
//     props :{
//       list:data
//     }
//   }
// }
