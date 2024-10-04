import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./router.css";
import Login from "./pages/Login/Login";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import Error from "./pages/Error/Error";
import PrivateRoute from "./privateRoute";
import PreviewPage from "./pages/PreviewPage/PreviewPage";



const AppRouter = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error/>} />
          <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute/>} >
          <Route path="/product-page" element={<ProductsPage />} />
          <Route path="/preview-page" element={<PreviewPage />} />
          <Route path="/product-preview/:id" element={<ProductPreview />} />
        </Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default AppRouter;
