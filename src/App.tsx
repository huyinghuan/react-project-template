import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from "@pages/index"

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Index />}></Route>
  </Routes>
);
export default App;
