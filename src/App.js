import Cards from "./components/Cards";
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import {Route,Routes} from "react-router-dom"
import Details from "./components/Details";
import { loadStripe } from "@stripe/stripe-js";
const stripepromise = loadStripe("pk_test_51N2cWASFlR87RcRhOIDn1mADG98bUF3hQGyQGspujtgVewf4qlmquDHDNfVClDQcHTVUrvMC9ga8aJcNVhJb1qW100g8twmAL2");
console.log(stripepromise);
function App() {
  return (
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}></Route>
        <Route path="/addmovie" element={<AddMovie/>}></Route>
        <Route path="/detail/:id" element={<Details/>}></Route>
        {/* <Route path="/payment" elemen}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
