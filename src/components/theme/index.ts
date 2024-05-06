import { lazy } from "solid-js";
const Sidebar = lazy(() => import("./sidebar"));
const Content = lazy(() => import("./content"));
const Header = lazy(() => import("./header"));

export { Sidebar, Header, Content };
