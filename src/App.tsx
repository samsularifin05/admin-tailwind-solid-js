import { Header, Content, Sidebar } from "./components";
import { ToastNotification, themes } from "./utils";

function App() {
  return (
    <>
      {themes.header && <Header />}
      {themes.sidebar && <Sidebar />}
      <Content />
      <ToastNotification />
    </>
  );
}

export default App;
