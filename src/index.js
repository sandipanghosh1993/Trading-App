import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import App from "./components/App";
import reducers from "./reducers";
import SocketProvider from "./components/SocketContext/SocketContext";
import "./index.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <SocketProvider>
       <App/>
    </SocketProvider>
  </Provider>
);
