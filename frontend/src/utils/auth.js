import { decodeToken } from "react-jwt";

export const isAdmin = () => {
  const token = sessionStorage.getItem("token");
  const myDecodedToken = decodeToken(token);
  return myDecodedToken.isAdmin;
};
