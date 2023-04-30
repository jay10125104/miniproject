import Cards from "./components/Cards";
import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import {Route,Routes} from "react-router-dom"
import Details from "./components/Details";
function App() {
  return (
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}></Route>
        <Route path="/addmovie" element={<AddMovie/>}></Route>
        <Route path="/detail/:id" element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
