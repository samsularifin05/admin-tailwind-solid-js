import { createStore } from "solid-js/store";

export const [themes, setThemes] = createStore({
  sidebar: true,
  header: true,
  blankScreen: true
});
export const [loading, setLoading] = createStore({
  screen: false,
  button: false,
  table: false
});
