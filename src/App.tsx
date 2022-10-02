import React from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App ">
      <Header />

      <div className="h-screen">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>

      <Footer />
    </div>
  );
}

export default App;
