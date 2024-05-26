import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [currentUser, setCurrentUser] = useAuth();
  const handleLogout = () => {
    try {
      setCurrentUser({ ...currentUser, user: null });
      localStorage.removeItem("users");
      toast.success("Logout successfull");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Logout failed due to" + error.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
