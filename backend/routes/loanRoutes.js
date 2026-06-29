const router = require("express").Router();
const auth = require("../middleware/auth");
const { body } = require("express-validator");

const {
  createLoan,
  getLoans,
  deleteLoan,
  updateLoan
} = require("../controllers/loanController");

router.post(
  "/",
  auth,
  [
    body("amount").isNumeric(),
    body("income").isNumeric(),
    body("expenses").isNumeric(),
    body("creditScore").isNumeric(),
    body("interestRate").isNumeric(),
    body("tenure").isNumeric()
  ],
  createLoan
);

router.get("/", auth, getLoans);
router.delete("/:id", auth, deleteLoan);
router.put("/:id", auth, updateLoan);

module.exports = router;