import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import Profil from './Profil';
import Accueil from './Accueil';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}