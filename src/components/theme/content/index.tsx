/* eslint-disable @typescript-eslint/no-explicit-any */
import { For } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { MenuRoutes } from "../../../config";
import { themes } from "../../../utils";
import { NotFound } from "../../../pages";
import Header from "../header";
import Sidebar from "../sidebar";

const App = (props: any) => (
  <>
    {themes.header && <Header />}
    {themes.sidebar && <Sidebar />}
    <div
      class={
        themes.blankScreen ? "flex-1 lg:ml-72 lg:mt-10 px-6 m-auto mt-3" : ""
      }
    >
      {props.children}
    </div>
  </>
);
const Content = () => {
  return (
    <Router root={App}>
      <For each={MenuRoutes}>
        {(list) => {
          return <Route path={list.path} component={list.component} />;
        }}
      </For>
      <Route path="*" component={NotFound} />
    </Router>
  );
};

export default Content;
