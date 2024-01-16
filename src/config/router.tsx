import { Dashboard, About, Contact, Login } from "../pages";

const MenuRoutes = [
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => <Dashboard />
  },
  {
    path: "/about",
    exact: true,
    title: "About",
    component: () => <About />
  },
  {
    path: "/contact-us",
    exact: true,
    title: "Contact-us",
    component: () => <Contact />
  },
  {
    path: "/",
    exact: true,
    title: "login",
    component: () => <Login />
  }
];

export { MenuRoutes };
