const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company"],
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
    },
    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "CLOSED"],
      default: "PENDING",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
