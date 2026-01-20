const mongoose = require("mongoose");

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      "YOUR_URL",
    );

    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log("MongoDB Connection Failed ❌", err.message);
    process.exit(1);
  }
};

module.exports = { mongoConnect };
