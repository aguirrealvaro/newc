import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout";
import { Home, Other } from "@/containers";

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="other" element={<Other />} />
      </Route>
    </Routes>
  );
};
