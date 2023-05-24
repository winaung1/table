
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import { Make } from "./components/pages/Make";

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<Make/>} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
