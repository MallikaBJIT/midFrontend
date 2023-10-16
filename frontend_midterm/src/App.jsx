// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login.component";
import useToken from "./authorication/useToken";
//import Navigation from "./components/navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HealthForm from "./components/healthInfoForm.component";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <HealthForm />
    // <Router>
    //   <Routes>
    //     <Route path="/create-healthdata" element={<HealthForm />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
