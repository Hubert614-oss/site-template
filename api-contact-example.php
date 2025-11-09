<?php
/**
 * API PHP pour formulaire de contact
 * À placer dans le dossier: api/contact.php
 * Compatible avec hébergement o2switch
 */

// Configuration des headers CORS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *'); // En production, remplacer * par votre domaine
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Gestion preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configuration
$email_destinataire = "hubertarlin1@gmail.com"; // MODIFIEZ avec votre email

// Vérifier la méthode
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Méthode non autorisée'
    ]);
    exit;
}

// Fonction de validation d'email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Fonction de nettoyage des données
function cleanInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

try {
    // Récupération des données
    // Support JSON et form-urlencoded
    $rawInput = file_get_contents('php://input');
    $jsonData = json_decode($rawInput, true);
    
    if ($jsonData !== null) {
        // Données JSON
        $nom = cleanInput($jsonData['nom'] ?? '');
        $email = cleanInput($jsonData['email'] ?? '');
        $message = cleanInput($jsonData['message'] ?? '');
    } else {
        // Données POST classiques
        $nom = cleanInput($_POST['nom'] ?? '');
        $email = cleanInput($_POST['email'] ?? '');
        $message = cleanInput($_POST['message'] ?? '');
    }
    
    // Validation
    $errors = [];
    
    if (empty($nom)) {
        $errors[] = "Le nom est requis";
    } elseif (strlen($nom) < 2) {
        $errors[] = "Le nom doit contenir au moins 2 caractères";
    }
    
    if (empty($email)) {
        $errors[] = "L'email est requis";
    } elseif (!isValidEmail($email)) {
        $errors[] = "L'email n'est pas valide";
    }
    
    if (empty($message)) {
        $errors[] = "Le message est requis";
    } elseif (strlen($message) < 10) {
        $errors[] = "Le message doit contenir au moins 10 caractères";
    }
    
    // Si erreurs, retourner
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => implode(', ', $errors)
        ]);
        exit;
    }
    
    // Préparer l'email
    $sujet = "Nouveau message depuis le site web - " . date('d/m/Y H:i');
    
    // Headers de l'email
    $headers = [
        "From: noreply@" . $_SERVER['HTTP_HOST'],
        "Reply-To: $email",
        "X-Mailer: PHP/" . phpversion(),
        "MIME-Version: 1.0",
        "Content-Type: text/html; charset=UTF-8"
    ];
    
    // Corps de l'email en HTML
    $corps_email = "
    <!DOCTYPE html>
    <html lang='fr'>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { 
                font-family: Arial, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                margin: 0;
                padding: 0;
            }
            .container { 
                max-width: 600px; 
                margin: 0 auto; 
                padding: 20px; 
            }
            .header { 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                color: white; 
                padding: 20px; 
                text-align: center; 
                border-radius: 5px 5px 0 0;
            }
            .content { 
                background: #f8f9fa; 
                padding: 20px; 
                border-radius: 0 0 5px 5px;
            }
            .field { 
                margin-bottom: 15px; 
                padding: 10px;
                background: white;
                border-radius: 3px;
            }
            .field strong { 
                color: #2c3e50; 
                display: inline-block;
                min-width: 80px;
            }
            .message-box { 
                background: white; 
                padding: 15px; 
                border-left: 4px solid #3498db; 
                margin-top: 10px; 
                border-radius: 3px;
                white-space: pre-wrap;
            }
            .footer { 
                text-align: center; 
                color: #666; 
                font-size: 12px; 
                margin-top: 20px; 
                padding-top: 20px;
                border-top: 1px solid #ddd;
            }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>💌 Nouveau Message de Contact</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <strong>👤 Nom:</strong> $nom
                </div>
                <div class='field'>
                    <strong>📧 Email:</strong> <a href='mailto:$email'>$email</a>
                </div>
                <div class='field'>
                    <strong>💬 Message:</strong>
                    <div class='message-box'>" . nl2br($message) . "</div>
                </div>
            </div>
            <div class='footer'>
                <p>Message reçu le " . date('d/m/Y à H:i:s') . "</p>
                <p>MonSite - Formulaire de Contact</p>
            </div>
        </div>
    </body>
    </html>";
    
    // Envoi de l'email
    $envoi_reussi = mail(
        $email_destinataire, 
        $sujet, 
        $corps_email, 
        implode("\r\n", $headers)
    );
    
    if ($envoi_reussi) {
        // Log de succès (optionnel)
        error_log("Email envoyé avec succès de: $email");
        
        // Réponse de succès
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
        ]);
    } else {
        throw new Exception("Échec de l'envoi de l'email");
    }
    
} catch (Exception $e) {
    // Log d'erreur
    error_log("Erreur formulaire contact: " . $e->getMessage());
    
    // Réponse d'erreur
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.'
    ]);
}
?>
