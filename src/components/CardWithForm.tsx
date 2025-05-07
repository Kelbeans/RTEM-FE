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
  ) => Promise<{ authError: string } | null>;
}

export const CardWithForm = ({ onLogin }: CardWithFormProps) => {
  const [email, setEmail] = useState({
    value: "kelvin@gmail.com",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "Password123!",
    error: "",
  });
  const [authError, setAuthError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setAuthError("");
    setShowAlert(false);

    // Call parent login handler with separate email/password
    const errors = await onLogin(email.value, password.value);

    if (errors) {
      setAuthError(errors.authError || "");
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
                onChange={(e) =>
                  setPassword({ ...password, value: e.target.value })
                }
              />
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
            message={authError || ""}
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