const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  loanType: String,
  amount: Number,           // ✅ MUST EXIST
  income: Number,
  expenses: Number,
  creditScore: Number,

  employmentType: String,
  existingLoans: Number,

  interestRate: Number,
  tenure: Number,

  emi: Number,
  eligibilityScore: Number,
  status: String,
  foir: Number,
  suggestion: String

}, { timestamps: true });

module.exports = mongoose.model("Loan", loanSchema);