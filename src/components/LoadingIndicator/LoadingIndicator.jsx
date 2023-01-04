import { useIsFetching } from "react-query";

function LoadingIndicator() {
  const isFetching = useIsFetching();

  return (
    isFetching && (
      <div className="loading-indicator">
        <img src="/images/spinner.gif" alt="Loading..." />
      </div>
    )
  );
}

export default LoadingIndicator;
