import { For } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { MenuRoutes } from "../../../config";
import { themes } from "../../../utils";

const NotFound = () => {
  return (
    <div class="flex items-center justify-center h-[80vh]">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-red-500">404 Not Found</h2>
        <p class="text-gray-600 mt-2">The requested page could not be found.</p>
        <div class="mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="animate-bounce h-6 w-6 text-red-500 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
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
        <Route path="*" component={NotFound} />
      </Router>
    </div>
  );
};

export default Content;
