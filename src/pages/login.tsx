import { CSSProperties } from "react";
import { CardWithForm } from "@/components/CardWithForm";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "@/api/auth-controller";
import { Strings } from "@/types/models";

export const Login = () => {
  const navigate = useNavigate();

  const loginAction = async (email: Strings, password: Strings) => {
    const response = await authenticateUser({ email, password });
    const object = response.data.object;

    if (response.data.httpStatus == "OK") {
      navigate("/dashboard", { state: { email, object } });
      return null;
    } else {
      return {
        authError: "Invalid email or password",
      };
    }
  };

  return (
    <div style={themedStyle.container}>
      <CardWithForm onLogin={loginAction} />
    </div>
  );
};

const themedStyle: { container: CSSProperties; textColor: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "80vw",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    margin: "auto",
  },
  textColor: {
    color: "black",
  },
};
