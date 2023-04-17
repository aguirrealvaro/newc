import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Other } from "@/containers";

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="other" element={<Other />} />
    </Routes>
  );
};
