import React , { useState } from "react";
import  Header  from "./Common/Header.jsx";
import SideBar from "./Common/SideBar.jsx";
import RouteConfiguration from "./Routing/RouteConfiguration.jsx";
import Login from "./Auth/Login.jsx";
import { useSelector } from "react-redux";

export default function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
//   const isLoggedIn = useSelector((state) => state.user.isLoggedIn);


  // Callback for successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  
  return (
    <>
  <div class="inner-wrapper">
			<div id="loader-wrapper">
				<div class="loader">
				  <div class="dot"></div>
				  <div class="dot"></div>
				  <div class="dot"></div>
				  <div class="dot"></div>
				  <div class="dot"></div>
				</div>
			</div>
  {!isLoggedIn ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
          <>
			<Header />
			
			<div class="page-wrapper">
				<div class="container-fluid">
					<div class="row">
			<SideBar />
            <RouteConfiguration />
					</div>
				</div>
			</div>
			</>
        )}
		</div>
		<div class="sidebar-overlay" id="sidebar_overlay"></div>
    </>
  );
}
