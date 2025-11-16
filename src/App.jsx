import { useState, useEffect } from "react";
import Header from "./Components/Header";
import { Outlet, useMatches } from "react-router-dom";
import ChatModal from "./Components/ChatModel";
import ScrollToTop from "./Components/ScrollToTop";
import MobileFooterMenu from "./Components/MobileFooterMenu";



import BasicBreadcrumbs from "./Components/BasicBreadcrumbs";
import Footer from "./Components/Footer";


function App() {
  const organizationName = "Conflict Victim and Disabled Society | Nepal";
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const pageTitle = currentMatch?.handle?.title || "Page";

  useEffect(() => {
    document.title = `${pageTitle} | ${organizationName}`;
  }, [pageTitle]);

  return (
    <div>
    
     <ScrollToTop />
      <Header />
      <BasicBreadcrumbs />
      
      <Outlet context={{ organizationName, pathname: location.pathname }} />

      <Footer/>
          <MobileFooterMenu /> 
    
    </div>
  );
}

export default App;









