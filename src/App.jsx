import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyList from "./components/propertyList/PropertyList";
import SearchBar from "./components/searchBar/SearchBar";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="Main">
        <h1>Welcome to real estate business</h1>
        <SearchBar />
        
        <Routes>
          <Route path="/" element={<PropertyList />} />
          {/* Future route: details */}
          {/* <Route path="/property/:id" element={<PropertyDetails />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
