import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import { HOME_ROUTE } from "./utils/consts";

import Header from './components/Header'; // путь измените, если нужно

const App = () => {
  const isAuth = true;

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Header />
      <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.Component />} />
      ))}




        <Route
          path="/dashboard"
          element={isAuth ? <div>Dashboard</div> : <Navigate to={HOME_ROUTE} />}
        />

        <Route path="/" element={<Navigate to={HOME_ROUTE} />} />
        <Route path="*" element={<div>404 — Страница не найдена</div>} />
      </Routes>
    </Suspense>
  );
};


export default App;
