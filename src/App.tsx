import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Page404 from "./pages/404";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Secured from "./pages/Secured";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedPath from "./components/ProtectedPath";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="secured"
                element={
                  <ProtectedRoute>
                    <Secured />
                  </ProtectedRoute>
                }
              />
              <Route path="user" element={<ProtectedPath />}>
                <Route path="profile" element={<UserProfile />} />
              </Route>
              <Route
                path="*"
                element={<Page404 title={"404 - Page Not Found"} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
