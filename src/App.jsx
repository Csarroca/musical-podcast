import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import PodcastPage from "./pages/PodcastPage";
import { ReactQueryDevtools } from "react-query/devtools";
import PodcastDetailedPage from "./pages/PodcastDetailedPage/PodcastDetailedPage";
import EspisodeDetailedPage from "./pages/EpisodeDetailedPage/EpisodeDetailedPage";

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
        <Route path="/podcast/:podcastId" element={<PodcastDetailedPage />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<EspisodeDetailedPage />}
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
