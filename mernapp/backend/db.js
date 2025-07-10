const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;
// const mongoDB = async() => {
// await mongoose.connect(mongoURI,{useNewUrlParser: true}, async(err,result) => {
//     if (err) console.log('-----',err);
//      else {
//         console.log('Connected to MongoDB');
//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(function(err, data) {
//             if(err) console.log( err);
//                 else console.log(data);
//     })
//     }
// });
// }
// module.exports = mongoDB;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log("Connected to MongoDB successfully!");

    const foodItemsCollection = mongoose.connection.db.collection("food_items");
    
    const data = await foodItemsCollection.find({}).toArray();


    const foodCategoryCollection = mongoose.connection.db.collection("food_category");
    const catData = await foodCategoryCollection.find({}).toArray();
    // console.log("--- Fetched Food Items ---");
    // console.log(data);

    global.food_items = data;
    global.foodCategory = catData;
 
  } catch (err) {
    console.error("--- Error connecting to MongoDB ---");
    console.error(err);
  }
};

module.exports = mongoDB;

