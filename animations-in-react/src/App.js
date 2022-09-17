import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "shared-components/header";
import PageContents from "pages/contents";
import Example1 from "pages/example1";
import Example14 from "pages/example14";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<PageContents />} />
        <Route path="/example-1" element={<Example1 />} />
        <Route path="/example-14" element={<Example14 />} />
      </Routes>
    </div>
  );
}

export default App;
