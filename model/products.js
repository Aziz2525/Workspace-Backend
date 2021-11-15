const mongoose = require("./connect");

const productSchema = mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_type: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    company_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }
  },
  { timestamps: true }
);
const productsModel = mongoose.model("products", productSchema);
module.exports = productsModel;
