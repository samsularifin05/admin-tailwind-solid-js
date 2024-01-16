/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "./assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = document.getElementById("root");

render(() => <App />, root!);
