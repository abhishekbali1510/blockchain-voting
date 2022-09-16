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

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testmailabhi15@gmail.com",
      pass: "qijvaydfnbyogewu",
    },
  });

app.post("/mail", cors(), (req, res) => {
  console.log(req.body.mail);

  var mailOptions = {
    from: "testmailabhi15@gmail.com",
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


app.post("/candidateMail", cors(), (req, res) => {
  console.log(req.body.mail);

  var mailOptions = {
    from: "testmailabhi15@gmail.com",
    to: req.body.mail,
    subject: "Registration sucessfull",
    text: `Dear Candidate , you are registered as a succesfull candidate . Thank you`,
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



app.post("/mailOtp",cors(),(req,res)=>{

  var mailOptions = {
    from: "testmailabhi15@gmail.com",
    to: req.body.mail,
    subject: "Registration sucessfull",
    text: `Dear voter ,${req.body.otp} is your otp for login `,
  };

  transporter.sendMail(mailOptions,(err,info)=>{
    if(err)
    {
      console.log(err);
    }
    else{
      console.log("otp sent : ",info);
    }
  })
  res.send({ status: "200" });
});

app.listen(5000, () => console.log(`Listening on port 5000`))