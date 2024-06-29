import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Outlet />
    </div>
  );
}
