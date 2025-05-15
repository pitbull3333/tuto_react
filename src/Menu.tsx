import { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.tailwind.css";
export function Menu(){
  const [open,setOpen] = useState(false);
  return (
    <div className="menu_div_button">
      {/* Bouton d'ouverture */}
      <button onClick={() => setOpen(!open)} className="menu_button"> Menu</button>
      {/* Menu déroulant */}
      {open && (
        <div className="menu_div_ul">
          <ul className="menu_ul">
            <li className="menu_li">
              <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>
            </li>
            <li className="menu_li">
              <Link to="/profil" onClick={() => setOpen(false)}>Profil</Link>
            </li>
            <li className="menu_li">Déconnexion</li>
          </ul>
        </div>
      )}
    </div>
  );
}