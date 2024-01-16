import { For } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { MenuRoutes } from "../../../config";
import { themes } from "../../../utils";

const Content = () => {
  return (
    <div
      class={
        themes.blankScreen ? "flex-1 lg:ml-72 lg:mt-10 px-6 m-auto mt-3" : ""
      }
    >
      <Router>
        <For each={MenuRoutes}>
          {(list) => {
            return <Route path={list.path} component={list.component} />;
          }}
        </For>
      </Router>
    </div>
  );
};

export default Content;
