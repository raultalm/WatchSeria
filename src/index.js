import "./global.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// Creacte the virtual DOM and tell React to inject all the virtual DOM in the  <div id="root"></div> (public/index.html)
const rootDiv = document.getElementById("root");

// Creates the Virtual DOM and its root is "rootDiv"
const reactRoot = ReactDOM.createRoot(rootDiv);

// Create the first component on the Virtual DOM, the first node in the tree of components on the Virtual DOM
reactRoot.render(<App />);
