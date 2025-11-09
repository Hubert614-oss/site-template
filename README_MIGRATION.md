# Site Vitrine - React + TypeScript

Site web moderne adapté du PHP vers React/TypeScript avec Vite.

## ✅ Fonctionnalités Adaptées

### Frontend (React/TypeScript)
- ✅ **Header avec navigation fixe** - Menu responsive avec hamburger mobile
- ✅ **Section Hero** - Page d'accueil avec appels à l'action
- ✅ **Section Services** - Grille de cartes avec animations au scroll
- ✅ **Section À propos** - Présentation avec features et image
- ✅ **Formulaire de contact** - Validation côté client
- ✅ **Footer** - 3 colonnes avec liens sociaux
- ✅ **Animations** - Smooth scroll, fade-in, hover effects
- ✅ **Responsive** - Mobile-first design

## 🚀 Installation et Démarrage

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build
```

## 📧 Formulaire de Contact - Backend Nécessaire

Le formulaire de contact est actuellement **simulé** côté client. Pour l'envoi réel d'emails, vous avez plusieurs options :

### Option 1: API Backend Node.js (Recommandé)

Créer un serveur Express avec Nodemailer :

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Votre SMTP
  port: 587,
  secure: false,
  auth: {
    user: 'votre-email@example.com',
    pass: 'votre-mot-de-passe'
  }
});

app.post('/api/contact', async (req, res) => {
  const { nom, email, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: email,
      to: 'hubertarlin1@gmail.com',
      subject: 'Nouveau message depuis le site web',
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    
    res.json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi' });
  }
});

app.listen(3000, () => console.log('API sur port 3000'));
```

Puis modifier `Contact.tsx` ligne 78 :

```typescript
const response = await fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
const data = await response.json();
```

### Option 2: Service Tiers (Plus Simple)

Utiliser **EmailJS**, **Formspree**, ou **SendGrid** :

#### EmailJS (Gratuit jusqu'à 200 emails/mois)

```bash
npm install @emailjs/browser
```

```typescript
// Dans Contact.tsx
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.nom,
    from_email: formData.email,
    message: formData.message
  },
  'YOUR_PUBLIC_KEY'
);
```

### Option 3: Hébergement o2switch avec PHP

Si vous hébergez sur o2switch, vous pouvez :

1. Créer un fichier `api/contact.php` :

```php
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$email_destinataire = "hubertarlin1@gmail.com";

$nom = htmlspecialchars($_POST['nom'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($_POST['message'] ?? '');

if (empty($nom) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Données invalides']);
    exit;
}

$sujet = "Nouveau message depuis le site web";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/html; charset=UTF-8";

$corps = "<h2>Nouveau message</h2>
<p><strong>Nom:</strong> $nom</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Message:</strong> $message</p>";

if (mail($email_destinataire, $sujet, $corps, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé !']);
} else {
    echo json_encode(['success' => false, 'message' => 'Erreur d\'envoi']);
}
?>
```

2. Modifier Contact.tsx pour appeler cette API :

```typescript
const response = await fetch('https://votre-domaine.fr/api/contact.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams(formData as any)
});
```

## 🎨 Personnalisation

### Couleurs
Modifier les couleurs dans `src/styles/global.css` :
- `#3498db` - Bleu principal
- `#2c3e50` - Gris foncé
- `#667eea` / `#764ba2` - Gradient hero

### Contenu
- **Textes** : Modifier directement dans les composants
- **Images** : Remplacer l'URL Unsplash dans `Accueil.tsx`
- **Coordonnées** : Modifier dans `Contact.tsx` et `Footer.tsx`

### Icônes Font Awesome
Changer les icônes en utilisant les classes Font Awesome 6.0

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Header.tsx      # Navigation avec menu mobile
│   ├── Accueil.tsx     # Hero + Services + À propos
│   ├── Contact.tsx     # Formulaire + Infos contact
│   └── Footer.tsx      # Footer avec 3 colonnes
├── styles/
│   └── global.css      # Styles adaptés du PHP
├── App.tsx             # Composant principal
└── main.tsx            # Entry point
```

## 🔧 Technologies Utilisées

- **React 18** - Library UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultra-rapide
- **Font Awesome 6** - Icônes
- **CSS3** - Animations et responsive

## 📝 Notes Importantes

1. **Formulaire de contact** : Actuellement en mode simulation. Choisissez une option backend ci-dessus.
2. **Images** : L'image "équipe" utilise Unsplash. Remplacez par vos propres images.
3. **SEO** : Ajoutez meta tags dans `index.html` pour le référencement.
4. **Analytics** : Ajoutez Google Analytics si nécessaire.

## 🚀 Déploiement

### Netlify / Vercel
```bash
npm run build
# Déployer le dossier dist/
```

### o2switch avec cPanel
1. Build le projet : `npm run build`
2. Uploader le contenu du dossier `dist/`
3. Configurer `.htaccess` pour React Router si nécessaire

## 📞 Support

Pour toute question sur l'adaptation PHP → React, consultez les commentaires dans le code.
