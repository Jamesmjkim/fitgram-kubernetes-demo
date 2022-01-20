import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import DashboardContainer from "./containers/DashboardContainer";
import ForumContainer from "./containers/ForumContainer";
import NavContainer from "./containers/NavContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginSignupContainer from "./containers/LoginSignupContainer";

const App = () => {
  const token = sessionStorage.getItem("token");
  return (
    <Router>
      {token ? (
        <div>
          <NavContainer />
          <Routes>
            <Route
              exact
              path="/dashboard"
              element={<DashboardContainer />}
            ></Route>
            <Route
              exact
              path="/forum_page/:forumId"
              element={<ForumContainer />}
            ></Route>
            <Route
              exact
              path="/profile/:userId"
              element={<ProfileContainer />}
            ></Route>
            <Route
              exact
              path="/message/:id"
              element={<DashboardContainer />}
            ></Route>
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route exact path="/" element={<LoginSignupContainer />}></Route>
          <Route
            path="*"
            element={
              <div className="grid place-content-center">
                <h1 className="text-3xl font-extrabold font-sans text-center py-10">
                  Please log in to continue
                </h1>
                <button
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  className="text-3xl border-2 border-primary-500"
                >
                  Log in
                </button>
              </div>
            }
          ></Route>
        </Routes>
      )}
    </Router>
  );
};

export default App;
