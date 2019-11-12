#Demo Auth

- ng new demo-auth
- cd demo-auth
- npm i bootstrap
- npm i @auth0/angular-jwt
- npm i @fortawesome/fontawesome-free

---

- dans le fichier package.json objet contient deux attributs importants

- dependencies => toutes lib dedans sont des lib qui permettent le projet de fonctionner

- npm i <package>
- npm i <package> --save (vieille de npm)

- devDependencies => toutes lib qui sont dedans sont des lib qui vont aider le développeur
- dans le processus de production (pas nécessaire pour faire fonctionner le projet)

- npm i <package> --save-dev
- npm i <package> -D

---

4 pages pour le front

ng g c front/home
ng g c front/login
ng g c front/navbar
ng g c front/not-found

3 page dans le back

ng g c admin/dashboard
ng g c admin/user
ng g c admin/article

---

Navigation dans le site

dans le fichier app.module.ts => définir mes routes

---

app.component.html

vider => et mettre le squelette commun de toutes les pages

---

activer twitter bootstrap / fontawsome dans angular.json

---

ajouter un logo

https://fontawesome.com/icons?d=gallery

---

fait le html de la barre de menu

---

fait le html du formulaire de connexion

---

dans le dashboard.component.html

ajouter à gauche dans laquelle vous avez 4 liens

- retour au front
- deconnexion
- gestion des utilisateur
- gestion des articles

=> composant Card

---

récupérer les informations qui sont saisies dans le formulaire de connexion

app.module.ts =>
import { FormsModule } from '@angular/forms';

FormsModule,

et réussi à récupérer ce qui est saisie dans le formulaire

---

créer un service =>
appeler http://localhost:5000/api/connexion

API répond jwt si tout ok // erreur 

ng g s service/auth



