const { calculateQuotation } = require("../services/quotation.service");
const { sendQuotationMail } = require("../services/mail.service");

exports.createQuotation = async (req, res) => {
  try {
    const { fullName, phone, email, device, issue } = req.body;

    if (!fullName || !phone || !email || !device || !issue) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const quotation = calculateQuotation(device, issue);

    await sendQuotationMail(req.body, quotation);

    res.status(200).json({
      message: "Quotation generated successfully",
      quotation,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
