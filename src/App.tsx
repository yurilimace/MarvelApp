// import "./App.css";
import { Home } from "./Pages/Home/Home";
import { ContextComponent } from "./context";
import { ContextConsumer } from "./contextConsumer";

function App() {
  return (
    <>
      {/* <ContextComponent>
        <ContextConsumer />
      </ContextComponent> */}
      <Home />
    </>
  );
}

export default App;
