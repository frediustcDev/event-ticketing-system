import React from "react";
import ReactDOM from "react-dom";

import "./less/main.less";
import App from "./containers/App/App.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
