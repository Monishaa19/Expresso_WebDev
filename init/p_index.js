const mongoose = require("mongoose");
const initData = require("./p_data.js");
const Listing = require("../models/packages.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/espresso";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  try {
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

initDB();