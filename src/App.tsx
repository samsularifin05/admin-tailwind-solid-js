import { Header, Sidebar, Content, Card } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content>
        <Card header="Data Master">Hai</Card>
      </Content>
    </div>
  );
}

export default App;
