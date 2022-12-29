import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import PodcastDetailedPage from "./pages/PodcastDetailedPage";
import PodcastPage from "./pages/PodcastPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PodcastPage />} />
        <Route path="/podcast/:id" element={<PodcastDetailedPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
