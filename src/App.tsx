import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profil from './Profil';
import Accueil from './Accueil';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}