import { lazy } from "solid-js";

const Dashboard = lazy(() => import("./dashboard"));
const User = lazy(() => import("./user"));
const Contact = lazy(() => import("./contact"));
const Login = lazy(() => import("./login"));
const NotFound = lazy(() => import("./notFound"));

export { Dashboard, User, Contact, Login, NotFound };
