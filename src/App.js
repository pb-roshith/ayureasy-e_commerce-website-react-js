import {
createBrowserRouter,
createRoutesFromElements,
RouterProvider,
Route,
} from "react-router-dom";
import Rootlayout from "./rootlayout/rootlayout";
import Foods from "./components/foods";
import Drinks from "./components/drinks";
import Medicine from "./components/medicine";
import Home from "./components/home";
import Contactlayout from "./rootlayout/contactlayout";

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Rootlayout />}>
    <Route index element={<Home />}></Route>
    <Route path="products" element={<Contactlayout />}>
      <Route path="foods" element={<Foods />}></Route>
      <Route path="drinks" element={<Drinks />}></Route>
      <Route path="medicine" element={<Medicine />}></Route>
    </Route>
  </Route>
)
);

function App() {
return (
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);
}

export default App;
