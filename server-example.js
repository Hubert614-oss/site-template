// Exemple d'API backend pour le formulaire de contact
// Option 1: Backend Node.js + Express + Nodemailer

// Installation: npm install express nodemailer cors dotenv

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true pour port 465
  auth: {
    user: process.env.SMTP_USER, // votre email
    pass: process.env.SMTP_PASS  // votre mot de passe ou app password
  }
});

// Validation d'email
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
  try {
    const { nom, email, message } = req.body;

    // Validation
    if (!nom || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs sont requis'
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Email invalide'
      });
    }

    // Préparer l'email
    const mailOptions = {
      from: `"${nom}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_DESTINATAIRE || 'hubertarlin1@gmail.com',
      subject: 'Nouveau message depuis le site web',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset='UTF-8'>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                     color: white; padding: 20px; text-align: center; }
            .content { background: #f8f9fa; padding: 20px; margin: 20px 0; 
                      border-radius: 5px; }
            .field { margin-bottom: 15px; }
            .field strong { color: #2c3e50; }
            .message-box { background: white; padding: 15px; border-left: 4px solid #3498db; 
                          margin-top: 10px; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>💌 Nouveau Message de Contact</h2>
            </div>
            <div class="content">
              <div class="field">
                <strong>👤 Nom:</strong> ${nom}
              </div>
              <div class="field">
                <strong>📧 Email:</strong> 
                <a href="mailto:${email}">${email}</a>
              </div>
              <div class="field">
                <strong>💬 Message:</strong>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Message reçu le ${new Date().toLocaleString('fr-FR')}</p>
              <p>MonSite - Formulaire de Contact</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    // Réponse de succès
    res.json({
      success: true,
      message: 'Message envoyé avec succès !'
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
    });
  }
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route non trouvée'
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur API démarré sur http://localhost:${PORT}`);
  console.log(`📧 Emails envoyés à: ${process.env.EMAIL_DESTINATAIRE || 'hubertarlin1@gmail.com'}`);
});

// Export pour tests
module.exports = app;
