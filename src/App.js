import PodcastList from "./components/PodcastList/PodcastList";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PodcastList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
