const mongoose = require("./connect");

const productTypeSchema = mongoose.Schema(
  {
    product_type_name: {
      type: String,
      required: true,
    },
    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);
const productTypeModel = mongoose.model("productTypes", productTypeSchema);
module.exports = productTypeModel;
