import React from 'react'; // Importer React pour utiliser JSX
import UserList from './UserList';  // Importer le composant UserList
import './App.css'; // Importer les styles CSS pour l'application

// Définition du composant principal App
function App() {
  return (
    <div className="App">
      {/* Afficher le composant UserList qui contient la liste des utilisateurs */}
      <UserList />
    </div>
  );
}

// Exporter le composant App pour qu'il puisse être utilisé dans d'autres fichiers
export default App;