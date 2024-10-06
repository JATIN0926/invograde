import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gauravtripathii7979@gmail.com',
      pass: 'qzyx ulcu ijxd cckk',
    },
  });

export async function sendEmail({to, subject, text}) {
    transporter.sendMail({
        from: '"Gaurav Tripathi" <gauravtripathii7979@gmail.com@gmail.com>',
        to,
        subject,
        text,
        html: text,
      }).then(info => {
        console.log({info});
      }).catch(console.error);
}
