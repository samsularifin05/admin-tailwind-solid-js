import { Content } from "./components";
import { LoadingScreen, ToastNotification } from "./utils";

function App() {
  return (
    <>
      <Content />
      <ToastNotification />
      <LoadingScreen />
    </>
  );
}

export default App;
