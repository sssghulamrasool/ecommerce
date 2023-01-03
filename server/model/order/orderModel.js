const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    total: Number,
    customer_id: String,
    order_key: String,
    payment_method: String,
    orderStatus: String,
    billing: {
      full_name: String,
      address: String,
      state: String,
      postcode: String,
      country: String,
      email: String,
      phone: String,
    },
    product_items: [
      {
        product_id: String,
        name: String,
        quantity: Number,
        single_price: Number,
        single_total: Number,
        image: String,
      },
    ],
  },
  { timestamps: true }
);

const OrdrModel = mongoose.model("orders", orderSchema);

module.exports = OrdrModel;
