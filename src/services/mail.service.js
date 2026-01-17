const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendQuotationMail = async (data, quotation) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: "New Mobile Repair Quotation Request",
    html: `
      <h3>Customer Details</h3>
      <p><b>Name:</b> ${data.fullName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>

      <h3>Device Details</h3>
      <p><b>Device:</b> ${data.device}</p>
      <p><b>Issue:</b> ${data.issue}</p>

      <h3>Estimated Quotation</h3>
      <p><b>Price:</b> ₹${quotation.estimatedPrice}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
