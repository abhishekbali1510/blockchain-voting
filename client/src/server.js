const express = require("express");
const app = express();

var bodyParser = require("body-parser");
var cors = require("cors");
var nodemailer = require("nodemailer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: '*'
}));

app.post("/mail", cors(), (req, res) => {
  console.log(req.body.mail);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abhishekbali15oct@gmail.com",
      pass: "eudaxkznypavaihq",
    },
  });

  var mailOptions = {
    from: "abhishekbali15oct@gmail.com",
    to: req.body.mail,
    subject: "Registration sucessfull",
    text: `Dear voter , you are registered for online voting . Thank you`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send({ status: "200" });
});

app.listen(5000, () => console.log(`Listening on port `))