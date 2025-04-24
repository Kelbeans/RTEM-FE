import { Button } from "@/components/ui/button";

export const login = () => {
  return (
    <div style={themedStyle.container}>
      <div style={themedStyle.textColor}>Hello World</div>
      <Button>Login</Button>
    </div>
  );
}


const themedStyle = {
  container: {
    display: "flex", // Add flex display
    flexDirection: "column", // Stack items vertically
    width: "80%", // Added a margin for the container
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    minHeight: "100vh", // Optional: full viewport height to see vertical centering
    margin: 'auto', // center the container
  },
  textColor: {
    color: "Black",
  },
};