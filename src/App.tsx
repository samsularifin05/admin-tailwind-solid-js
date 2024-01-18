import { Header, Content, Sidebar } from "./components";
import { LoadingScreen, ToastNotification, themes } from "./utils";

function App() {
  return (
    <>
      {themes.header && <Header />}
      {themes.sidebar && <Sidebar />}
      <Content />
      <ToastNotification />
      <LoadingScreen />
    </>
  );
}

export default App;
