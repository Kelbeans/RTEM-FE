export const emailValidator = (email: string) => {
  const regex = /\S+@\S+\.\S+/;
  if (!email || email.length <= 0) return "Email cannot be empty.";
  if (!regex.test(email)) return "Ooops! We need a valid email address.";
  return "";
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return "Password cannot be empty.";
  return "";
};
