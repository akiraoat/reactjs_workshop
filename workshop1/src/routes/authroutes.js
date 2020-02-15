import SignIn from "../views/authentication/Signin";
import SignUp from "../views/authentication/Signup";

var authRoutes = [
  { path: "authentication/signin", name: "signin", component: SignIn },
  { path: "authentication/signup", name: "signup", component: SignUp }
];
export default authRoutes;
