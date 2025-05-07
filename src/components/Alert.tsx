import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "./ui/button";

interface AlertDemoProps {
  onClose: () => void;
  message: string;
}

export const AlertDemo = ({ onClose, message }: AlertDemoProps) => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Wrong Credentials!</AlertTitle>
      <AlertDescription>
        {message}
      </AlertDescription>
      <Button onClick={onClose}>Close</Button> {/* Add onClick handler */}
    </Alert>
  );
}
