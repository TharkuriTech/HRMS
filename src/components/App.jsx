import React from "react";
import  Header  from "./Common/Header";
import SideBar from "./Common/SideBar";
import MainBoard  from "./Dashboard/MainBoard";
import RouteConfiguration from "./Routing/RouteConfiguration"

export default function App() {
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

			<Header />
			
			<div class="page-wrapper">
				<div class="container-fluid">
					<div class="row">
						<SideBar />
            <RouteConfiguration />
            {/* <MainBoard /> */}
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar-overlay" id="sidebar_overlay"></div>
    </>
  );
}
