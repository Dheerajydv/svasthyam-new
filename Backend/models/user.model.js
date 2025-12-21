import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
      required: true,
      minlength: [10, "Mobile Number Should be 10 characters."],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be more than 6 characters."],
    },
    confirmPassword: {
      type: String,
      required: true,
      minlength: [6, "Password must be more than 6 characters."],
    },
    userType: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    disability: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    aadhaarNumber: {
      type: Number,
      unique: true,
      required: true,
      minlength: [12, "Aadhaar Number Should be 12 characters."],
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      aadhaarNumber: this.aadhaarNumber,
      email: this.email,
      phoneNumber: this.phoneNumber,
    },
    process.env.ACCESS_SECRET_KEY,
    {
      expiresIn: "10d",
    }
  );
};

const User = mongoose.model("User", userSchema);

export default User;