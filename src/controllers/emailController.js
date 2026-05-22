require('dotenv').config()
const nodemailer = require('nodemailer')
const path = require('path');
class MailController {

    async envioEmail(req, res) {
        const { nome, email } = req.body

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
                text: "Segue arquivo",
                attachments: [
                    {
                        filename: "Ebook.txt",
                        path: path.join(__dirname, '../uploads/ebook.txt')
                    }
                ],
                html: `
                <h2>Olá, ${nome}!</h2>
                <p>Parabens pela iniciativa de aprender uma nova lingua</p>
                <p>Em anexo esta o ebook solicitado!</p>
            `,
            });
            return res.render(`homeView`, { message: 'Ebook enviado!' })

        } catch (error) {
            console.log(error)
            return res.json('erro ao enviar email')
        }
    }
}

module.exports = new MailController()