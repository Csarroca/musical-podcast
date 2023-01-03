import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import PodcastPage from "./pages/PodcastPage";
import { ReactQueryDevtools } from "react-query/devtools";
import PodcastDetailedPage from "./pages/PodcastDetailedPage/PodcastDetailedPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 86400000,
    },
  },
});

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
