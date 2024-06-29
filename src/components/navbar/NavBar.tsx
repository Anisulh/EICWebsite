import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex w-full border px-8 py-2 shadow-sm">
      <Link to="/" className="mr-4">
        <img src="/logo.svg" alt="EICLogo" className="h-8" />
      </Link>
      <div className="flex-1" />
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/expansion">Expansion</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
}
