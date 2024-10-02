import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import RootLayout from './components/layout/RootLayout';
import Donations from './pages/Donations';
import ExpansionProject from './pages/ExpansionProject';
import Nikkah from './pages/Nikkah';
import Counseling from './pages/Counseling';
import SocialRelief from './pages/SocialRelief';
import WeekendSchool from './pages/WeekendSchool';
import AskImam from './pages/AskImam';
import Admin from './pages/Admin';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/donate' element={<Donations />} />
                    <Route path='/expansion' element={<ExpansionProject />} />
                    <Route path='/nikkah' element={<Nikkah />} />
                    <Route path='/counseling' element={<Counseling />} />
                    <Route path='/social-relief' element={<SocialRelief />} />
                    <Route path='/weekend-school' element={<WeekendSchool />} />
                    <Route path='/ask-imam' element={<AskImam />} />
                    <Route path="/admin" element={<Admin />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
