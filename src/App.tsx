import { Suspense } from "solid-js";
import { Content } from "./components";
import { LoadingScreen, ToastNotification } from "./utils";

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Content />
      <ToastNotification />
      <LoadingScreen />
    </Suspense>
  );
}

export default App;
