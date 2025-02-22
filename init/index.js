const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl =
  "mongodb+srv://darpanchoudhary02:zOvKZf5r4U9gdz5C@cluster0.k8erc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67ba0c10f6e4f2268f9f8de9",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
