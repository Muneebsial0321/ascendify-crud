const mongoose = require('mongoose');

const db_Connection =async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("connected to database")
}
export default db_Connection