import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Profil from './Profil';
import Accueil from './Accueil';
export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}