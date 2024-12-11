const mongoose=require('mongoose');
const dotenv = require('dotenv');

// const mongoURI='mongodb://localhost:27017/mynotes';
dotenv.config();

// const mongoURI ='mongodb+srv://haribalaji17072004:123456hari@cluster0.b21vp.mongodb.net/mynotes'
const mongoURI = process.env.mongoURI;

// now connecting the db old version
// const  connectTOMongo=()=>{
  
// mongoose.connect(mongoURI,()=>{
//     // it is a  call back function that will be called or executed after db connected sucessfully
//     console.log("connected to Mingo sucessfully");

// })

const connectToMongo = async () => {//here call back function is not allowed instead of that we are going with promise
    try {
      console.log(mongoURI);
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB successfully");
    } catch (error) {
      console.error("Failed to connect to MongoDB", error);
    }
  };

// }

// now export this module so that i can use it any where
module.exports=connectToMongo;
