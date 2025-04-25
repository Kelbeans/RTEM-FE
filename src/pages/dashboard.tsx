import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      Hello User!
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
