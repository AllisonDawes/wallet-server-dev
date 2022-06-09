import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("Cart", schema);
