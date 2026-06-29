module.exports = (data) => {

  const P = Number(data.amount);
  const R = Number(data.interestRate) / 12 / 100;
  const N = Number(data.tenure) * 12;

  // EMI calculation
  let emi = 0;
  if (R === 0) {
    emi = P / N;
  } else {
    emi =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);
  }

  emi = Math.round(emi);

  // FOIR
  const foir = ((emi + Number(data.existingLoans || 0)) / Number(data.income)) * 100;

  // CREDIT SCORE
  let score = 0;

  if (data.creditScore >= 750) score += 40;
  else if (data.creditScore >= 700) score += 30;
  else if (data.creditScore >= 650) score += 20;
  else score += 10;

  // FOIR SCORE
  if (foir <= 40) score += 40;
  else if (foir <= 50) score += 25;
  else score += 10;

  // STATUS
  let status;
  if (foir <= 40 && data.creditScore >= 700) {
    status = "Eligible";
  } else if (foir <= 50) {
    status = "Moderate";
  } else {
    status = "Risky";
  }

  // SUGGESTION
  let suggestion;
  if (status === "Risky") {
    suggestion = "Reduce loan amount or increase income";
  } else if (status === "Moderate") {
    suggestion = "Proceed carefully";
  } else {
    suggestion = "Safe to proceed";
  }

  return {
    emi,
    foir: foir.toFixed(2),
    score,
    status,
    suggestion
  };
};