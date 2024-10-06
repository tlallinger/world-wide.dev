import nodemailer from 'nodemailer';

export default defineEventHandler(async (req) => {
    if (req.method !== 'POST') {
        throw Error('Method Not Allowed');
    }

    try {
        const { subject, message, from } = await readBody(req);

        const runtimeConfig = useRuntimeConfig()

        const transporter = nodemailer.createTransport({
            host: runtimeConfig.smtpHost,
            port: Number(runtimeConfig.smtpPort) || 587,
            secure: false, // use TLS
            auth: {
                user: runtimeConfig.smtpUser,
                pass: runtimeConfig.smtpPass,
            },
        });


        const mailOptions = {
            from: from,
            to: runtimeConfig.recipientEmail,
            subject: subject,
            text: message,
        };

        await transporter.sendMail(mailOptions);

    } catch (error) {
        throw Error(`Failed to send email: ${error}`);
    }
});

