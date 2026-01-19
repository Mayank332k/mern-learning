const mongoose = require("mongoose");

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:root@mayank.yygoagp.mongodb.net/?appName=Mayank",
    );

    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.log("MongoDB Connection Failed ❌", err.message);
    process.exit(1);
  }
};

module.exports = { mongoConnect };
