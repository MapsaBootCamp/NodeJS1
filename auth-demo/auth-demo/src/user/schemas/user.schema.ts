import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  addresses: [
    {
      state: String,
      city: String,
      street: String,
      zipcode: Number,
    },
  ],
});
