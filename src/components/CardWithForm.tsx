import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { AlertDemo } from "./Alert";

interface CardWithFormProps {
  onLogin: (
    email: string,
    password: string
  ) => void | { emailError: string; passwordError: string } | null;
  loginError?: string | null;
}

export const CardWithForm = ({ onLogin, loginError }: CardWithFormProps) => {
  const [email, setEmail] = useState({
    value: "johndoe@gmail.com",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "Password123!",
    error: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setEmailError("");
    setPasswordError("");
    setShowAlert(false);

    // Call parent login handler with separate email/password
    const errors = onLogin(email.value, password.value);

    if (errors) {
      setEmailError(errors.emailError || "");
      setPasswordError(errors.passwordError || "");
    }

    if (loginError) {
      setShowAlert(true);
    }
  };

  return (
    <Card className="w-[500px] p-[25px] text-center relative">
      <CardHeader>
        <CardTitle className="text-[30px]">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full">
            <div className="flex flex-col mb-[10px] gap-[10px]">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="p-[10px] w-full"
                style={cardStyle.inputTextColor}
                value={email.value}
                onChange={(e) => setEmail({ ...email, value: e.target.value })}
              />
              {emailError && (
                <span className="text-red-500 text-sm">{emailError}</span>
              )}
            </div>
            <div className="flex flex-col space-y-1.5 mb-[10px] gap-[10px]">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="p-[10px] w-full"
                style={cardStyle.inputTextColor}
                value={password.value}
                onChange={(e) => setPassword({ ...password, value: e.target.value })}
              />
              {passwordError && (
                <span className="text-red-500 text-sm">{passwordError}</span>
              )}
            </div>
          </div>
          <CardFooter className="justify-center content-center p-0">
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </CardContent>

      {showAlert && (
        <div className="absolute bottom-[-100px] left-0 right-0 mx-auto w-full">
          <AlertDemo
            onClose={() => setShowAlert(false)}
            message={loginError || ""}
          />
        </div>
      )}
    </Card>
  );
};


const cardStyle = {
  inputTextColor: {
    color:"black",
  }
}


 /* 
    The handleLogin function is put in the form not in the button. 
    the e: React.FormEvent is a React.FormEvent is a TypeScript type that represents a form event in React.
    the e.preventDefault() : Prevents the browser's to refreshed when submitting. 
  */
  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const emailValidation = emailValidator(inputtedEmail.value);
  //   const passwordValidation = passwordValidator(inputtedPassword.value);
  //   console.log("Params: ", inputtedEmail.value, inputtedPassword.value);
  //   if (emailValidation || passwordValidation) {
  //     setInputtedEmail({ ...inputtedEmail, error: emailValidation });
  //     setInputtedPassword({ ...inputtedPassword, error: passwordValidation });
  //     return;
  //   }

  //   if (
  //     inputtedEmail.value !== hardCodedUser.email ||
  //     inputtedPassword.value !== hardCodedUser.password
  //   ) {
  //     setShowAlert(true);
  //   } else {
  //     navigate({ to: "/dashboard" });
  //     router.navigate({ to: "/dashboard" }); // Navigate on to the Dashboard when Success!
  //     console.log("LOGGED IN SUCCESSFULLY!");
  //   }
  // };