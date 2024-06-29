import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="mt-10">
      <Outlet />
    </div>
  );
}
