// // npm install --save @sendgrid/mail

// // using Twilio SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(
//   "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"
// );
// const msg = {
//   to: "stockprojectupwork@gmail.com", // Change to your recipient
//   from: "stockprojectupwork@gmail.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error.response.body);
//   });
const API_KEY = "2ef218580fda153d9a51086283db07a2-81bd92f8-6852f514";
const DOMAIN = "sandbox6dcac65473a84587b7a5f4dfce916f83.mailgun.org";

const mailgun = require("mailgun-js");

const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
const data = {
  from: "Excited User <stockprojectupwork@gmail.com>",
  to: "jacobhoskins779@gmail.com",
  subject: "Hello",
  text: "Testingfadsfasfdfasdf some Mailgun awesomness!",
};
mg.messages().send(data, function (error, body) {
  console.log(body);
});
