import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  // État pour stocker la liste des utilisateurs
  const [listOfUser, setListOfUser] = useState([]);
  // État pour indiquer si les données sont en cours de chargement
  const [loading, setLoading] = useState(true);
  // État pour gérer les erreurs éventuelles
  const [error, setError] = useState(null);
  // État pour suivre la page actuelle dans la pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Nombre d'utilisateurs à afficher par page
  const usersPerPage = 3; // 3 utilisateurs par page

  // useEffect pour récupérer les données des utilisateurs à chaque changement de page
  useEffect(() => {
    // Effectuer une requête GET pour récupérer les utilisateurs
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${usersPerPage}`)
      .then(response => {
        // Mettre à jour l'état avec les données récupérées
        setListOfUser(response.data); // Récupérer les données de la réponse
        setLoading(false); // Arrêter l'indicateur de chargement
      })
      .catch(error => {
        // Gérer les erreurs et mettre à jour l'état
        console.error('Une erreur est survenue lors du chargement des données :', error); // Afficher l'erreur dans la console
        setError(error); // Mettre à jour l'état avec l'erreur
        setLoading(false); // Arrêter l'indicateur de chargement
      });
  }, [currentPage]); // Déclencher l'effet à chaque changement de `currentPage`

  // Fonction pour passer à la page suivante
  const handleNextPage = () => setCurrentPage(prevPage => prevPage + 1);

  // Fonction pour revenir à la page précédente
  const handlePrevPage = () => setCurrentPage(prevPage => prevPage - 1);

  // Afficher un message de chargement si les données sont en cours de récupération
  if (loading) {
    return <p>Chargement des utilisateurs...</p>;
  }

  // Afficher un message d'erreur si une erreur s'est produite
  if (error) {
    return <p>{error}</p>;
  }

  // Rendu du composant
  return (
    <div>
      {/* Titre de la page */}
      <h1 className="title">Liste des Utilisateurs</h1>
      
      {/* Liste des utilisateurs */}
      <ul className="user-list">
        {listOfUser.map(user => ( // Parcourir la liste des utilisateurs
          // Afficher les informations de chaque utilisateur
          <li key={user.id} className="user-item">
            {/* Affichage des informations de l'utilisateur */}
            <p className="user-name">{user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Téléphone:</strong> {user.phone}</p>
            <p><strong>Site Web:</strong> {user.website}</p>
            <hr />
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="pagination">
        {/* Bouton pour aller à la page précédente */}
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Précédent</button>
        {/* Bouton pour aller à la page suivante */}
        <button onClick={handleNextPage}>Suivant</button>
      </div>
    </div>
  );
};

export default UserList; // Exporter le composant UserList pour l'utiliser ailleurs