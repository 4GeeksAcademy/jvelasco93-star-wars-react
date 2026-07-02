import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home";
import Detail from "./pages/Detail";
import CategoryPage from "./pages/CategoryPage";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} errorElement={<h1>Not found!</h1>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/:category/:id" element={<Detail/>}/>
      <Route path="/:category" element={<CategoryPage/>}/>
    </Route>
  )
);