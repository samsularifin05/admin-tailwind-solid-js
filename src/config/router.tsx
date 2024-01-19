import { Dashboard, User, Contact, Login } from "../pages";
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
    path: "/user",
    exact: true,
    title: "User",
    component: () => (
      <ProtectedRoute>
        <User />
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
