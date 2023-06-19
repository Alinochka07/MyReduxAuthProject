import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


export const myRoutes = [
    {path: "/", name: "Home", element: <Home/>, isPrivate: false},
    {path: "/about", name: "About", element: <About/>, isPrivate: false},
    {path: "/signup", name: "Signup", element: <SignUp/>, isPrivate: false},
    {path: "/login", name: "Login", element: <Login/>, isPrivate: false},
    {path: "/profile", name: "Profile", element: <Profile/>, isPrivate: true}
]

