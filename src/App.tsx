// import "./App.css";
import { Home } from "./Pages/Home/Home";
import { ContextComponent } from "./context";
import { ContextConsumer } from "./contextConsumer";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      {/* <ContextComponent>
        <ContextConsumer />
      </ContextComponent> */}
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </>
  );
}

export default App;
