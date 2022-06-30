 import { MongoClient } from "mongodb"
 
 
 export default async  function handler (req, res ){
     const client = await  MongoClient.connect("mongodb+srv://rakeshgupta:helloworld@cluster0.cvk93.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
     const db = client.db();
     const collection =  db.collection("items"); // accessed the location for the data to be entered on the cloud 
     const data = req.body 
    const result = await  collection.insertOne(data)
    res.status( 201).json({
        isSuccess:true
    })
}