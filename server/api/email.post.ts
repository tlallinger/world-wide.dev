import nodemailer from 'nodemailer';

export default defineEventHandler(async (req) => {
    if (req.method !== 'POST') {
        throw Error('Method Not Allowed');
    }

    try {
        const { subject, message, from } = await readBody(req);

        const runtimeConfig = useRuntimeConfig()

        const transporter = nodemailer.createTransport({
            host: runtimeConfig.private.smtpHost,
            port: Number(runtimeConfig.private.smtpPort),
            secure: false, // use TLS
            auth: {
                user: runtimeConfig.private.smtpUser,
                pass: runtimeConfig.private.smtpPass,
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

