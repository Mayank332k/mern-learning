const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    rollNo: { type: Number, required: true, unique: true },
    branch: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Student", studentSchema);
