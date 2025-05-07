import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Safely extract response data object in the Login Response
  const { email, object } = location.state || {};
  const fullName = object?.firstName + " " + object?.lastName || "Guest User"; // Fallback to Guest User   when fullName is empty.

  const logoutAction = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Hello, {fullName}!</h1>
      <p>Email: {email}</p>
      <Button onClick={logoutAction}>Logout</Button>
    </div>
  );
};
