const mongoose =require('mongoose');
async function dbConn() {
    // const conn=await mongoose.connect('mongodb://localhost:27017/studentapp'); // *studentapp* create new database
    const conn=await mongoose.connect('mongodb+srv://user:root@cluster0.wqprco3.mongodb.net/crud-app?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log("database is connected successfully")
    }
    else{
        console.log("database is not connect")
    }
}
module.exports=dbConn;