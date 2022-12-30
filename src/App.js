import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import PodcastDetailedPage from "./pages/PodcastDetailedPage";
import PodcastPage from "./pages/PodcastPage";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PodcastPage />} />
        <Route path="/podcast/:id" element={<PodcastDetailedPage />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
