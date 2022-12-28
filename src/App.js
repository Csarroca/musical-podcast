import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import PodcastPage from "./pages/PodcastPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PodcastPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
