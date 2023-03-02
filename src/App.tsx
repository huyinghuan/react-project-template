import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Demo from "@pages/demo"
import Home from '@pages/home';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Demo />}></Route>
    <Route path="/home" element={<Home />}>
      <Route path="path1" element={<Demo />} />
      <Route path="*" element={<div>nofoud</div>} />
    </Route>
  </Routes>
);
export default App;
