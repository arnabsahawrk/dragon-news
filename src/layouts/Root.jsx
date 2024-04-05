import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <main className="font-poppins container mx-auto text-pretty px-4 py-4">
      <Outlet />
    </main>
  );
};

export default Root;
