import { useHistory } from "react-router-dom";

function useLastLocationHistory() {
  const history = useHistory();

  const change = (path: string) => {
    history.push(path, { from: history.location.pathname });
  };

  return change;
}

export default useLastLocationHistory;
