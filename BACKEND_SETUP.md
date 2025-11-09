# 🔌 Configuration du Backend pour le Formulaire de Contact

Ce fichier explique comment connecter le formulaire de contact React à différentes solutions backend.

## 📋 Table des Matières

1. [Backend Node.js + Nodemailer](#option-1-backend-nodejs--nodemailer)
2. [API PHP sur o2switch](#option-2-api-php-sur-o2switch)
3. [Service EmailJS (Sans backend)](#option-3-service-emailjs-sans-backend)

---

## Option 1: Backend Node.js + Nodemailer

### 1. Installation des dépendances

```bash
npm install express nodemailer cors dotenv
```

### 2. Créer le fichier `.env`

Copier `.env.example` vers `.env` et remplir vos informations :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASS=votre-mot-de-passe-app
EMAIL_DESTINATAIRE=hubertarlin1@gmail.com
PORT=3000
```

**Note Gmail** : Utilisez un "App Password" au lieu du mot de passe normal
- Allez dans : Compte Google > Sécurité > Validation en deux étapes > Mots de passe des applications

### 3. Copier le fichier serveur

```bash
cp server-example.js server.js
```

### 4. Démarrer le serveur API

```bash
node server.js
```

Le serveur démarrera sur `http://localhost:3000`

### 5. Modifier `Contact.tsx`

Dans le fichier `src/components/Contact.tsx`, ligne 75, remplacer :

```typescript
// Remplacer cette ligne :
await new Promise(resolve => setTimeout(resolve, 1000));

// Par :
const response = await fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});

const data = await response.json();

if (!data.success) {
  throw new Error(data.message);
}
```

### 6. Tester

1. Démarrer l'API : `node server.js`
2. Démarrer React : `npm run dev`
3. Remplir le formulaire et envoyer

---

## Option 2: API PHP sur o2switch

### 1. Créer le fichier API

Sur votre hébergement o2switch, créer le dossier `api` et copier `api-contact-example.php` dedans :

```
votre-site/
├── api/
│   └── contact.php  (copier le contenu de api-contact-example.php)
├── dist/  (votre build React)
```

### 2. Modifier l'email destinataire

Dans `api/contact.php`, ligne 18 :

```php
$email_destinataire = "hubertarlin1@gmail.com"; // VOTRE EMAIL ICI
```

### 3. Modifier `Contact.tsx`

Dans `src/components/Contact.tsx`, ligne 75, remplacer :

```typescript
// Remplacer :
await new Promise(resolve => setTimeout(resolve, 1000));

// Par :
const response = await fetch('https://votre-domaine.fr/api/contact.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
});

const data = await response.json();

if (!data.success) {
  throw new Error(data.message);
}
```

### 4. Déployer

1. Build React : `npm run build`
2. Uploader le contenu de `dist/` vers votre hébergement
3. Uploader `api/contact.php`
4. Tester le formulaire

---

## Option 3: Service EmailJS (Sans backend)

La solution la plus simple - aucun serveur requis !

### 1. Créer un compte EmailJS

1. Aller sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créer un compte gratuit (200 emails/mois)
3. Créer un service email (Gmail, Outlook, etc.)
4. Créer un template d'email
5. Noter : `SERVICE_ID`, `TEMPLATE_ID`, `PUBLIC_KEY`

### 2. Installer EmailJS

```bash
npm install @emailjs/browser
```

### 3. Modifier `Contact.tsx`

```typescript
// Ajouter l'import en haut du fichier
import emailjs from '@emailjs/browser';

// Dans la fonction handleSubmit, remplacer le bloc try/catch par :
try {
  await emailjs.send(
    'YOUR_SERVICE_ID',      // Remplacer
    'YOUR_TEMPLATE_ID',     // Remplacer
    {
      from_name: formData.nom,
      from_email: formData.email,
      message: formData.message,
      to_email: 'hubertarlin1@gmail.com'
    },
    'YOUR_PUBLIC_KEY'       // Remplacer
  );
  
  showNotification('Message envoyé avec succès !', 'success');
  setFormData({ nom: '', email: '', message: '' });
} catch (error) {
  showNotification('Erreur lors de l\'envoi. Réessayez plus tard.', 'error');
} finally {
  setIsSubmitting(false);
}
```

### 4. Configuration du template EmailJS

Dans votre template EmailJS, utilisez ces variables :

```
Nom: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

---

## 🧪 Test Local du Formulaire

### Avec Backend Node.js

Terminal 1:
```bash
node server.js
```

Terminal 2:
```bash
npm run dev
```

Ouvrir `http://localhost:5174` et tester le formulaire.

### Avec PHP (via XAMPP/WAMP)

1. Placer le projet dans `htdocs/`
2. Démarrer Apache
3. Ouvrir `http://localhost/votre-projet`

---

## 🚀 Production

### Build pour production

```bash
npm run build
```

Le dossier `dist/` contiendra tous les fichiers à déployer.

### Déploiement

#### Netlify/Vercel (avec API Node.js)
- Déployer le frontend sur Netlify/Vercel
- Déployer l'API Node.js sur Heroku/Railway/Render
- Mettre à jour l'URL de l'API dans `Contact.tsx`

#### o2switch (avec API PHP)
- Uploader `dist/` via FTP/cPanel
- Uploader `api/contact.php`
- Configurer le domaine

#### GitHub Pages + EmailJS
- Push vers GitHub
- Activer GitHub Pages
- Le formulaire utilisera EmailJS (déjà configuré)

---

## 🔒 Sécurité

### Backend Node.js
- Utilisez des variables d'environnement (`.env`)
- Ne commitez JAMAIS `.env` dans Git
- Ajoutez des rate limits (express-rate-limit)
- Validez toutes les entrées

### Backend PHP
- Nettoyez toutes les entrées avec `htmlspecialchars()`
- Validez les emails avec `filter_var()`
- Protégez contre les injections
- Limitez la taille des messages

### EmailJS
- Ne partagez pas votre PUBLIC_KEY publiquement
- Configurez un domaine autorisé dans EmailJS
- Activez la protection anti-spam

---

## ❓ Dépannage

### Le formulaire ne s'envoie pas

1. **Vérifier la console du navigateur** : F12 > Console
2. **Vérifier que l'API fonctionne** : 
   - Node.js : `http://localhost:3000/api/health`
   - PHP : Tester l'URL directement
3. **Vérifier les CORS** : L'API doit autoriser votre domaine
4. **Vérifier les logs** : 
   - Node.js : Regarder le terminal
   - PHP : Vérifier `error_log`

### Emails non reçus

1. **Vérifier le dossier SPAM**
2. **Gmail** : Vérifier que le "App Password" est correct
3. **o2switch** : Vérifier que `mail()` fonctionne
4. **EmailJS** : Vérifier la limite mensuelle

---

## 📞 Support

Pour toute question :
1. Consultez la documentation détaillée dans `README_MIGRATION.md`
2. Vérifiez les commentaires dans le code
3. Testez d'abord en local avant de déployer

---

## ✅ Checklist de Déploiement

- [ ] Backend configuré et testé
- [ ] Variables d'environnement en place
- [ ] Formulaire testé en local
- [ ] Email de destination correct
- [ ] Build React créé (`npm run build`)
- [ ] Fichiers uploadés sur le serveur
- [ ] Formulaire testé en production
- [ ] Emails reçus correctement
- [ ] Responsive testé sur mobile
- [ ] HTTPS activé (recommandé)

Bon déploiement ! 🚀
