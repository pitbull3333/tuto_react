import { useState } from "react";
export function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      {/* Bouton d'ouverture */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Menu
      </button>

      {/* Menu déroulant */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1 text-gray-800">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Accueil</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profil</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Déconnexion</li>
          </ul>
        </div>
      )}
    </div>
  );
}