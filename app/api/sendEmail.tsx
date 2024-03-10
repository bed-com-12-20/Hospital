import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zarilasam99@gmail.com",
        pass: "17381999",
      },
    });
    transporter.verify(function(error, success) {
      if (error) {
          console.error(error);
      } else {
          console.log("Server is ready to take our messages");
      }
  });
    const {
      name,
      gender,
      dob,
      address,
      email,
      phone,
      kin,
      relationship,
      kinPhone,
      reason,
      date,
      time,
    } = data;

    const mailOptions = {
      from: "zarilasam99@gmail.com",
      to: " zarilatroxx99@gmail.com ",
      subject: "Appointment Request",
      html: `
        <p>Name: ${name}</p>
        <p>Gender: ${gender}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Address: ${address}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Next of Kin: ${kin}</p>
        <p>Relationship: ${relationship}</p>
        <p>Next of Kin Phone: ${kinPhone}</p>
        <p>Reason for Visit: ${reason}</p>
        <p>Appointment Date: ${date}</p>
        <p>Appointment Time: ${time}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Response data:", mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }

  // if(req.method ==='POST'){
  //     // const{ data} = req.body
  //     const{ name, gender, dob, address, email, phone, kin,relationship, kinPhone, reason, date, time}=req.body;
  //     // const{ name, gender, dob, address, email, phone, kin,relationship, kinPhone, reason, date, time}=data;

  //     // construct email message
  //     const mailOptions ={
  //         from: 'zarilasam99@gmail.com',
  //         to: 'zarilasam99@gmail.com',
  //         subject: 'appointment Request',
  //         html: `
  //         <p>Name: ${name}</p>
  //         <p>Gender: ${gender}</p>
  //         <p>Date of Birth: ${dob}</p>
  //         <p>Address: ${address}</p>
  //         <p>Email: ${email}</p>
  //         <p>Phone: ${phone}</p>
  //         <p>Next of Kin: ${kin}</p>
  //         <p>Relationship: ${relationship}</p>
  //         <p>Next of Kin Phone: ${kinPhone}</p>
  //         <p>Reason for Visit: ${reason}</p>
  //         <p>Appointment Date: ${date}</p>
  //         <p>Appointment Time: ${time}</p>
  //       `

  //     };
  //     //send mail
  // try {
  //     await transporter.sendMail(mailOptions);
  //     res.status(200).json({message: 'Email sent successifully'})
  // } catch (error) {
  //     res.status(500).json({message: 'faield to send email'})
  // }

  // } else{
  //     res.status(405).json({message: 'Method not allowed'})
  // }
}
