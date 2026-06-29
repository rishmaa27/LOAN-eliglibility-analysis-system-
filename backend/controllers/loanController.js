const Loan = require("../models/Loan");
const calc = require("../utils/loanCalculator");
const { validationResult } = require("express-validator");

// CREATE
exports.createLoan = async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const result = calc(req.body);

    const loan = await Loan.create({
      ...req.body,
      userId: req.user.id,
      emi: result.emi,
      foir: result.foir,
      eligibilityScore: result.score,
      status: result.status,
      suggestion: result.suggestion
    });

    res.json(loan);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET
exports.getLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ userId: req.user.id });
    res.json(loans);
  } catch {
    res.status(500).json({ msg: "Fetch failed" });
  }
};

// UPDATE (SECURE)
exports.updateLoan = async (req, res) => {
  try {

    const result = calc(req.body);

    const updatedLoan = await Loan.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, // 🔒 FIX
      {
        ...req.body,
        emi: result.emi,
        foir: result.foir,
        eligibilityScore: result.score,
        status: result.status,
        suggestion: result.suggestion
      },
      { new: true }
    );

    res.json(updatedLoan);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// DELETE (SECURE)
exports.deleteLoan = async (req, res) => {
  try {
    await Loan.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });
    res.json({ msg: "Deleted successfully" });
  } catch {
    res.status(500).json({ msg: "Delete failed" });
  }
};