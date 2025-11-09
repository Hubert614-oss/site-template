# 🎨 Guide de Personnalisation Rapide

## 🎯 Modifications les Plus Courantes

### 1. Changer le Nom du Site

**Fichiers à modifier :**

#### `index.html` (ligne 7)
```html
<title>MonSite - Site Vitrine</title>
<!-- Remplacer par : -->
<title>VotreNom - Description</title>
```

#### `src/components/Header.tsx` (ligne 28)
```tsx
<h1><i className="fas fa-gem"></i> MonSite</h1>
<!-- Remplacer par : -->
<h1><i className="fas fa-gem"></i> VotreNom</h1>
```

#### `src/components/Footer.tsx` (ligne 14)
```tsx
<h3><i className="fas fa-gem"></i> MonSite</h3>
<!-- Remplacer par : -->
<h3><i className="fas fa-gem"></i> VotreNom</h3>
```

---

### 2. Modifier les Couleurs

**Fichier : `src/styles/global.css`**

#### Couleur Principale (Bleu)
```css
/* Ligne ~82, 188, etc. */
background: #3498db;
color: #3498db;
border-color: #3498db;

/* Remplacer #3498db par votre couleur */
/* Exemples : 
   Rouge: #e74c3c
   Vert: #27ae60
   Violet: #9b59b6
   Orange: #e67e22
*/
```

#### Gradient Hero (Fond d'accueil)
```css
/* Ligne 106 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Remplacer par vos couleurs */
/* Exemples :
   Bleu-Vert: linear-gradient(135deg, #667eea 0%, #27ae60 100%);
   Rouge-Orange: linear-gradient(135deg, #e74c3c 0%, #e67e22 100%);
   Violet-Rose: linear-gradient(135deg, #9b59b6 0%, #e91e63 100%);
*/
```

---

### 3. Changer les Textes

#### Section Hero (Page d'accueil)
**Fichier : `src/components/Accueil.tsx`**

```tsx
// Ligne 47-48
<h1 className="hero-title">Bienvenue sur MonSite</h1>
<p className="hero-subtitle">Votre partenaire de confiance pour tous vos projets</p>

<!-- Remplacer par vos textes -->
```

#### Section Services
**Fichier : `src/components/Accueil.tsx`** (lignes 65-90)

```tsx
<h3>Développement Web</h3>
<p>Création de sites web modernes...</p>

<!-- Personnaliser chaque service -->
```

#### Section À Propos
**Fichier : `src/components/Accueil.tsx`** (lignes 101-110)

```tsx
<p className="about-description">
  Nous sommes une équipe passionnée...
</p>

<!-- Raconter votre histoire -->
```

---

### 4. Modifier les Coordonnées

#### Contact Info
**Fichier : `src/components/Contact.tsx`** (lignes 109-130)

```tsx
<p>123 Rue de la République<br />75001 Paris, France</p>
<!-- Votre adresse -->

<p>+33 1 23 45 67 89</p>
<!-- Votre téléphone -->

<p>contact@monsite.fr</p>
<!-- Votre email -->
```

#### Footer
**Fichier : `src/components/Footer.tsx`** (lignes 34-36)

```tsx
<li><i className="fas fa-phone"></i> +33 1 23 45 67 89</li>
<li><i className="fas fa-envelope"></i> contact@monsite.fr</li>
<li><i className="fas fa-map-marker-alt"></i> Paris, France</li>

<!-- Vos coordonnées -->
```

---

### 5. Changer l'Image "À Propos"

**Fichier : `src/components/Accueil.tsx`** (ligne 131)

```tsx
<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" />

<!-- Remplacer par votre image -->
<!-- Option 1: URL externe -->
<img src="https://votre-url-image.com/image.jpg" />

<!-- Option 2: Image locale (dans public/) -->
<img src="/images/equipe.jpg" />
```

**Pour image locale :**
1. Créer dossier `public/images/`
2. Placer votre image dedans
3. Référencer avec `/images/nom-fichier.jpg`

---

### 6. Modifier les Icônes

**Trouver des icônes :** [fontawesome.com/icons](https://fontawesome.com/icons)

#### Services
**Fichier : `src/components/Accueil.tsx`**

```tsx
<i className="fas fa-laptop-code"></i>  <!-- Développement Web -->
<i className="fas fa-mobile-alt"></i>   <!-- Mobile -->
<i className="fas fa-search"></i>        <!-- SEO -->

<!-- Remplacer par : -->
<i className="fas fa-paint-brush"></i>  <!-- Design -->
<i className="fas fa-camera"></i>       <!-- Photo -->
<i className="fas fa-video"></i>        <!-- Vidéo -->
<i className="fas fa-chart-line"></i>   <!-- Analytics -->
```

#### Footer Social
**Fichier : `src/components/Footer.tsx`** (lignes 17-24)

```tsx
<i className="fab fa-facebook"></i>
<i className="fab fa-twitter"></i>
<i className="fab fa-linkedin"></i>
<i className="fab fa-instagram"></i>

<!-- Ajouter d'autres : -->
<i className="fab fa-youtube"></i>
<i className="fab fa-tiktok"></i>
<i className="fab fa-github"></i>
```

---

### 7. Liens Réseaux Sociaux

**Fichier : `src/components/Footer.tsx`** (lignes 17-24)

```tsx
<a href="#" aria-label="Facebook">
  <i className="fab fa-facebook"></i>
</a>

<!-- Remplacer # par vos liens -->
<a href="https://facebook.com/votre-page" aria-label="Facebook">
<a href="https://twitter.com/votre-compte" aria-label="Twitter">
<a href="https://linkedin.com/company/votre-entreprise" aria-label="LinkedIn">
```

---

### 8. Email de Réception du Formulaire

#### Option 1: EmailJS
Dans `Contact.tsx` après configuration :
```typescript
to_email: 'votre-email@domaine.com'
```

#### Option 2: Backend Node.js
Dans `.env` :
```env
EMAIL_DESTINATAIRE=votre-email@domaine.com
```

#### Option 3: Backend PHP
Dans `api/contact.php` (ligne 18) :
```php
$email_destinataire = "votre-email@domaine.com";
```

---

## 🎨 Personnalisations Avancées

### Ajouter un Service

**Fichier : `src/components/Accueil.tsx`**

Copier-coller un bloc service existant :

```tsx
<div className="service-card">
  <div className="service-icon">
    <i className="fas fa-votre-icone"></i>
  </div>
  <h3>Titre du Service</h3>
  <p>Description du service.</p>
</div>
```

### Changer la Police

**Fichier : `src/styles/global.css`** (ligne 10)

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Remplacer par Google Fonts : */
/* 1. Ajouter dans index.html : */
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

/* 2. Changer dans global.css : */
font-family: 'Poppins', sans-serif;
```

### Modifier le Logo/Icône

**Remplacer l'icône gem :**

```tsx
<i className="fas fa-gem"></i>
<!-- Par votre icône préférée : -->
<i className="fas fa-rocket"></i>
<i className="fas fa-star"></i>
<i className="fas fa-crown"></i>
```

**Ou utiliser une image :**

```tsx
<img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
```

---

## 🔧 Modifications Techniques

### Changer le Port de Développement

**Fichier : `vite.config.ts`**

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000  // Au lieu de 5174
  }
})
```

### Désactiver une Section

**Fichier : `src/App.tsx`**

```tsx
<main>
  <Accueil />
  {/* <Galerie /> */}  <!-- Commentée -->
  <Contact />
</main>
```

---

## ✅ Checklist de Personnalisation

- [ ] Nom du site modifié (3 fichiers)
- [ ] Couleurs personnalisées
- [ ] Texte Hero modifié
- [ ] Services personnalisés
- [ ] Section À Propos mise à jour
- [ ] Coordonnées mises à jour
- [ ] Image équipe remplacée
- [ ] Email de réception configuré
- [ ] Liens sociaux ajoutés
- [ ] Icônes personnalisées
- [ ] Police changée (optionnel)

---

## 🚀 Après Personnalisation

```bash
# Tester les modifications
npm run dev

# Vérifier qu'il n'y a pas d'erreurs
npm run lint

# Créer le build
npm run build
```

---

## 💡 Astuces

1. **Copie de couleurs** : Utiliser [coolors.co](https://coolors.co) pour palette
2. **Images gratuites** : [unsplash.com](https://unsplash.com), [pexels.com](https://pexels.com)
3. **Icônes** : [fontawesome.com/icons](https://fontawesome.com/icons) (6000+ icônes)
4. **Polices** : [fonts.google.com](https://fonts.google.com)
5. **Gradients** : [cssgradient.io](https://cssgradient.io)

---

## 📱 Test Responsive

Après modifications, tester sur :

- **Desktop** : 1920x1080
- **Tablet** : 768x1024 (F12 > Toggle Device Toolbar)
- **Mobile** : 375x667

---

**Besoin d'aide ?** Tous les fichiers ont des commentaires détaillés ! 💪
