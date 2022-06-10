import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    cartCode: {
      type: String,
      required: true,
    },
    cart: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: [
        "started",
        "processing",
        "pending",
        "approved",
        "refused",
        "refunded",
        "chargeback",
        "error",
      ],
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["billet", "credit_cart"],
      required: true,
    },
    installments: {
      type: Number,
    },
    total: {
      type: Number,
    },
    transactionId: {
      type: String,
    },
    processorResponse: {
      type: String,
    },
    customerEmail: {
      type: String,
    },
    customerName: {
      type: String,
    },
    customerMobile: {
      type: String,
    },
    customerDocument: {
      type: String,
    },
    billlingAddress: {
      type: String,
    },
    billingNumber: {
      type: String,
    },
    billingNeighborhood: {
      type: String,
    },
    billingCity: {
      type: String,
    },
    billingState: {
      type: String,
    },
    billingZipCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Transaction", schema);
