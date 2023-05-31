// import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home/Home";

import { QueryClient, QueryClientProvider } from "react-query";
import { Router } from "./router";

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
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </>
  );
}

export default App;