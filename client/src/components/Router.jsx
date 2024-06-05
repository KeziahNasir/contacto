import { BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Layout from "../pages/Layout.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
function Router(){
return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout >

              <Home />
            </Layout>
          }
        />

      
        <Route
          path="/Login"
          element={
            <Layout>
              {" "}
              <Login />{" "}
            </Layout>
          }
        />
              <Route
          path="/Signup"
          element={
            <Layout>
              {" "}
              <Signup />{" "}
            </Layout>
          }
        />
          </Routes>
    </BrowserRouter>
  );
}
export default Router