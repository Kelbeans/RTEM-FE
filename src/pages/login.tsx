import { CSSProperties, useState } from "react";
import { CardWithForm } from "@/components/CardWithForm";
import { emailValidator, passwordValidator } from "@/utils/Utils";
import { useNavigate } from "react-router-dom";

interface AuthenticateUser {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate(); // Use React Router's useNavigate hook
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    const authenticateUser: AuthenticateUser = { email, password };
    setLoginError(null);

    const emailValidation = emailValidator(authenticateUser.email);
    const passwordValidation = passwordValidator(authenticateUser.password);

    if (emailValidation || passwordValidation) {
      return {
        emailError: emailValidation || "",
        passwordError: passwordValidation || "",
      };
    }

    const hardCodedUser: AuthenticateUser = {
      email: "johndoe@gmail.com",
      password: "Password123!",
    };

    if (
      authenticateUser.email === hardCodedUser.email &&
      authenticateUser.password === hardCodedUser.password
    ) {
      navigate("/dashboard"); // Navigate to /dashboard using React Router
      console.log("Params: ", authenticateUser);
      console.log("LOGGED IN SUCCESSFULLY!");
    } else {
      setLoginError("Invalid email or password");
      console.log("Params: ", authenticateUser);
      return {
        emailError: "Invalid email or password",
        passwordError: "Invalid email or password",
      };
    }

    return { emailError: "", passwordError: "" };
  };

  return (
    <div style={themedStyle.container}>
      <CardWithForm onLogin={handleLogin} loginError={loginError} />
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
