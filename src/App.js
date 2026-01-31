import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"


const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
    </div>
  );
};
const main = ReactDOM.createRoot(document.getElementById("main"));

main.render(<AppLayout />);
