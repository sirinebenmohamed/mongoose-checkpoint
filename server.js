const express = require('express');
const connectDB = require('./DB/connectDB')
const PersonDB = require('./Model/model')


//New person

// const Person = new PersonDB({name: "sirin", age: 25, favouriteFoods:['spaghetti','pizza']})
// Person.save((err)=>{
//     if (err) {
//         return handleError(err)
//         //saved
//     }
// })


//Find All

// const search = async()=>{
//     try {
//         const data = await PersonDB.find({name:"sirine"});
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }
// search()


//update

// const query = {name:"sirine"}
// const UpdatePerson = async()=>{
//     const data = await PersonDB.findOneAndUpdate(query,{name:"siwar"},(err,data)=>{
//         try {
            
//             console.log(data)
//         } catch (err) {
//             console.log(err)
//         }
//     })
// }
// UpdatePerson()


//find one and delete

// const Delete = async()=>{
//     await PersonDB.findOneAndDelete({name: "sami"},(err,data)=>{
//         try {
//             console.log("removed data",data)
//         } catch (err) {
//             console.log(err)
//         }
//     })
// }
// Delete()



connectDB()
const app = express();
const PORT = 5000 ;

app.listen(PORT, (err) => {
    err?
    console.log(err)
    :console.log(`Server is running on port ${PORT}`)
});