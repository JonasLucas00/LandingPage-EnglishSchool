require('dotenv').config()
const nodemailer = require('nodemailer')
class MailController {

    async envioEmail(req, res) {
        const { nome, email } = req.body
        console.log(nome, email)
        console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS)

        try {

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: `"English School" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: "Obrigado por se cadastrar!",
                html: `
                <h2>Olá, ${nome}!</h2>
                <p>Parabens pela iniciativa de aprender uma nova lingua</p>
                <p>Abaixo esta o ebook solicitado!</p>
            `,
            });
            return res.send('Email enviado!')

        } catch (error) {
            console.log(error)
            return res.json('erro ao enviar email')
        }
    }
}

module.exports = new MailController()