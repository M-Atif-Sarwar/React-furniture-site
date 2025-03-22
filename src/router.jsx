import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
export const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
         
         <Route path="/shop" />
         <Route path="/aboutus" />
         <Route path="/blog" />
         

        </Route>
    )
)