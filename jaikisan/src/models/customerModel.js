const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobileNumber: String,
  DOB: Date,
  emailID: String,
  address: String,
  customerID: String,
  status: String,
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
