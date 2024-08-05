import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import LoginAdmin from "./LoginAdmin";
import LoginUser from "./LoginUser";
import Navbar from "./Navbar";
import SignupAdmin from "./SignupAdmin";
import SignupUser from "./SignupUser";
import Admin from "./Admin";
import Destination from "./Destination";
import Parcel from "./Parcel";
import User from "./User";
import MapComponent from "./MapComponent"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/parcel" element={<Parcel />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/signupadmin" element={<SignupAdmin />} />
          <Route path="/signupuser" element={<SignupUser />} />
          <Route path="/user" element={<User />} />
          <Route path="/map" element={<MapComponent />} /> {/* Ensure this path is correct */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
