# Dream Habitat — front-end

Plateforme d'IA qui refait la décoration d'une pièce à partir d'une photo : on photographie sa chambre, sa cuisine ou son salon, on choisit un style, et l'IA propose un nouvel aménagement.

Projet **Epitech** réalisé par une équipe de **10 personnes** (front-end, back-end Spring Boot, IA, DevOps AWS).
**Ce dépôt contient le front-end, que j'ai développé.**

## Fonctionnalités

- **Pièces et photos** : création de pièces par type (chambre, cuisine, salon…), dépôt de photos par glisser-déposer.
- **Génération par IA** : envoi de la photo à l'API, puis affichage de la décoration proposée.
- **Comptes** : inscription, connexion, profil utilisateur.
- **Abonnements et paiement** : page de tarifs, paiement par carte avec Stripe ou par PayPal.
- **Assistant conversationnel** intégré (agent Microsoft Copilot Studio).
- **Pages du site** : fonctionnalités, « comment ça marche », tarifs, blog, offre Pro, FAQ, support, carrières, contact (formulaire EmailJS), mentions légales, cookies.

## Technologies

React 18 · Vite · Tailwind CSS · Redux Toolkit · React Router · Framer Motion · Stripe · PayPal · EmailJS

Le front-end appelle l'API REST du back-end Spring Boot de l'équipe (`/api/login`, `/api/room`, `/api/photo/upload`, `/api/interior`).

## Lancer le projet

```bash
npm install
npm run dev
```

L'application attend l'API du back-end sur `http://localhost:8080`.

---

Axel (Mostapha) Ouahmane · [LinkedIn](https://www.linkedin.com/in/axel-ouahmane) · [GitHub](https://github.com/AxelOuahmne)
