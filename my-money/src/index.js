import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"
import { AuthProvider } from "./context/AuthContext"

render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
