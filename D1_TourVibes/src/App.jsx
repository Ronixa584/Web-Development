
import { Route, Routes } from "react-router-dom";
import {Home} from "./Componets/Home";
import { Services } from './Componets/Services';
import { Explore } from './Componets/Explore';
// import { About } from './Componets/About';
import {SignIn} from './Componets/SignIn';
import { LogIn } from "./Componets/LogIn";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Explore" element={<Explore />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>   
  );
};

export default App;
