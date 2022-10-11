const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://leonardo:mypassword@cluster0.4eywa5e.mongodb.net/crudintegracao?retryWrites=true&w=majority`
    );
    mongoose.Promise = global.Promise;
    console.log("Connected successfully to Atlas!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

module.exports = mongoose;
