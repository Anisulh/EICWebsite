import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import RootLayout from "./components/layout/RootLayout";
import Donations from "./pages/Donations";
import Services from "./pages/Services";
import ExpansionProject from "./pages/ExpansionProject";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/expansion" element={<ExpansionProject />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
