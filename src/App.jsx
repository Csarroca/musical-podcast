import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import PodcastPage from "./pages/PodcastPage/PodcastPage";
import PodcastDetailedPage from "./pages/PodcastDetailedPage/PodcastDetailedPage";
import EspisodeDetailedPage from "./pages/EpisodeDetailedPage/EpisodeDetailedPage";
import Header from "./components/Header/Header";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 86400000,
      onError: (error) => {
        console.log(error);
      },
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes>
        <Route path="/" element={<PodcastPage />} />
        <Route path="/podcast/:podcastId" element={<PodcastDetailedPage />} />
        <Route
          path="/podcast/:podcastId/episode/:episodeId"
          element={<EspisodeDetailedPage />}
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
