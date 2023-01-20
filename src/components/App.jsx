import React from "react";
import WatchList from "./WatchList";
import Subscribe from "./Subscribe/Subscribe";
import Notification from "./Notification";
import { Box } from "./styles";

/**
 * @function App
 *
 * Root component
 */
const App = () => {
  return (
    <Box>
      <Notification />
      <Subscribe />
      <WatchList />
    </Box>
  );
};

export default App;
