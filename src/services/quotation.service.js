const issuePriceMap = {
  "screen damage": 2500,
  "battery issue": 1500,
  "charging problem": 1200,
  "speaker issue": 1000,
  "water damage": 3000,
};

exports.calculateQuotation = (device, issue) => {
  const basePrice = issuePriceMap[issue.toLowerCase()] || 2000;

  return {
    device,
    issue,
    estimatedPrice: basePrice,
    currency: "INR",
  };
};
