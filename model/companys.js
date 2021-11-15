const mongoose = require("./connect");

const companySchema = mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const companyModel = mongoose.model("companys", companySchema);
module.exports = companyModel;
