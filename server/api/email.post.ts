import nodemailer from 'nodemailer';

export interface EmailBody {
    from: string;
    name: string;
    phone: string;
    subject: string;
    message: string;
}

export default defineEventHandler(async (req) => {
    if (req.method !== 'POST') {
        throw Error('Method Not Allowed');
    }

    try {
        const { subject, message, from, name, phone }: EmailBody = await readBody(req);

        const runtimeConfig = useRuntimeConfig()

        const transporter = nodemailer.createTransport({
            host: runtimeConfig.private.smtpHost,
            port: Number(runtimeConfig.private.smtpPort),
            secure: false,
            auth: {
                user: runtimeConfig.private.smtpUser,
                pass: runtimeConfig.private.smtpPass,
            },
        });

        const text = `Name: ${name}\nPhone: ${phone}\n\n${message}`;

        const mailOptions = {
            to: runtimeConfig.recipientEmail,
            from,
            subject,
            text,
        };

        await transporter.sendMail(mailOptions);

    } catch (error) {
        throw Error(`Failed to send email: ${error}`);
    }
});

