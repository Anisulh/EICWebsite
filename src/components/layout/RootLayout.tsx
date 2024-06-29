import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="max-w-7xl mx-auto mt-4">
      <Outlet />
    </div>
  );
}
