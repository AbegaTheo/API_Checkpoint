# API_Checkpoint
Exercice Checkpoint sur le cours API - BOOTCAMP POUR DEVELOPPEUR LOGICIEL | GOMYCODE


# API_Checkpoint

Ce projet est un exercice pratique réalisé dans le cadre du **Bootcamp pour Développeur Logiciel** de **GoMyCode**. L'objectif principal est de créer une application React qui consomme une API pour afficher une liste d'utilisateurs avec pagination.

## Fonctionnalités

- **Affichage des utilisateurs** : L'application récupère les données des utilisateurs depuis l'API publique [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
- **Pagination** : Les utilisateurs sont affichés 3 par page, avec des boutons pour naviguer entre les pages.
- **Mise en page responsive** : Les utilisateurs sont affichés dans une grille de 3 colonnes, avec un design adapté aux différentes tailles d'écran.
- **Gestion des états** : Utilisation de `useState` et `useEffect` pour gérer les données, le chargement et les erreurs.
- **Gestion des erreurs** : Affichage d'un message en cas d'échec de la récupération des données.

## Technologies utilisées

- **React** : Framework JavaScript pour construire l'interface utilisateur.
- **Axios** : Bibliothèque pour effectuer des requêtes HTTP.
- **CSS** : Pour la mise en page et le design de l'application.

## Installation et execution

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/AbegaTheo/API_Checkpoint.git
   cd API_Checkpoint

2. **Installer les dépendences** :
    ```bash
    npm install

3. **Lancer l'application** :
   ```bash
   npm start

4. **L'application sera accessible à l'adresse** : http://localhost:3000

## Instructions du Checkpoint

1. Créez un projet en utilisant create-react-app.
2. Créer le fichier UserList.js dans le dossier src
3. Installateur axios.
4. Vous allez utiliser l'API jsonplaceholder pour obtenir la liste des utilisateurs 
5. Utiliser axios pour obtenir les données du lien dans les crochets useEffect
6. Utiliser les crochets UseState pour enregistrer les données dans l'état listOfUSer 
7. Mapper listOfUser pour afficher la liste des utilisateurs à l'écran 
8. Modelez votre application comme vous le souhaitez.