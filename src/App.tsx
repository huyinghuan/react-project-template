import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Demo from "@pages/demo"

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Demo />}></Route>
  </Routes>
);
export default App;
