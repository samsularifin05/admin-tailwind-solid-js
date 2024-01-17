import { Dashboard, About, Contact, Login } from "../pages";
import { ProtectedRoute } from "./protectedRoute";

const MenuRoutes = [
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    )
  },
  {
    path: "/about",
    exact: true,
    title: "About",
    component: () => (
      <ProtectedRoute>
        <About />
      </ProtectedRoute>
    )
  },
  {
    path: "/contact-us",
    exact: true,
    title: "Contact-us",
    component: () => (
      <ProtectedRoute>
        <Contact />
      </ProtectedRoute>
    )
  },
  {
    path: "/",
    exact: true,
    title: "login",
    component: () => (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    )
  }
];

export { MenuRoutes };
