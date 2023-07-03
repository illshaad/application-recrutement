const nodemailer = require("nodemailer");

const sendConfirmationEmail = (candidates) => {
  const { messages, email } = candidates;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "test@gmail.com", //Exemple mail
      pass: "asasasaaddfodosndovnsvnsdnn", //Exemple pass application
    },
  });

  transporter
    .sendMail({
      from: "test@gmail.com",
      to: email,
      subject: "Bonjour, Votre candidature nous intéresse",
      html: `<h1>${messages}</h1>`,
    })
    .catch((err) => console.log(err));
};

module.exports = { sendConfirmationEmail };
