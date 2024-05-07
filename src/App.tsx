import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Maps from "./Components/Maps";
import SideBar from "./Components/SideBar";

const App = () => {
  return (
    <div className="md:flex">
      <SideBar />
      <Routes>
        <Route path="/" Component={Contact} />
        <Route path="/Maps" Component={Maps} />
      </Routes>
    </div>
  );
};

export default App;
