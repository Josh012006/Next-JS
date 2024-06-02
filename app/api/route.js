import nodemailer from 'nodemailer';




export async function POST(req, res) {

    const infos = await req.json();
    console.log(infos);

    // Defining mail variables
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: infos.mail,
        to: 'josuesmjr.mongan@gmail.com',
        subject: 'From your portfolio.',
        text: `
        This message was sent to you by ${infos.mail}

        Message:
        ${infos.message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return Response.json('Email sent successfully.');
    } catch (error) {
        console.log(error);
        return Response.json('An error occured. Please retry.');
    }
}