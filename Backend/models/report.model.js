import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },
    reportType: {
      type: String,
      required: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    disease: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    severity: {
      type: Number,
      required: true,
    },
    additionalNote: {
      type: String,
      required: true,
    },
    reportImages: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model("Report", reportSchema);

export default Report;