import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import RootLayout from "./components/layout/RootLayout";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
