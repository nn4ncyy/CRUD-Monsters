import mongoose from "mongoose";

mongoose.set('strictQuery', true);

// export const connectDB = async () => {
//   const url = `mongodb://127.0.0.1:27017/theLair`;
//   try {
//     const connection = await mongoose.connect(url, {
//       useUnifiedTopology: true,
//     });
//     console.log("Database connected successfully");
//   } catch (e) {
//     console.log("Failed to connect database:", e);
//   }
// };


const uri = "mongodb+srv://CMPT315:7tnqriikEykNBfdc@crud-cmpt315.rt8ie1d.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export const connectDB = async() => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true} );
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas!");
    }
}
